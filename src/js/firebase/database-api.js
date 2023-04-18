import { firebaseApp } from './firebase-init';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getDatabase, ref, set, onValue, remove, get } from 'firebase/database';

export class DatabaseAPI {
  #AUTH = getAuth(firebaseApp);
  #DATABASE = getDatabase(firebaseApp);

  async checkPresenseInWatched(movieId) {
    return new Promise(async resolve => {
      onAuthStateChanged(this.#AUTH, async user => {
        if (user) {
          let userId = user.uid;
          const reference = ref(
            this.#DATABASE,
            `users_library/${userId}/watched/${movieId}`
          );
          const snapshot = await get(reference);
          if (snapshot.exists()) {
            resolve(true);
          } else {
            resolve(false);
          }
        }
      });
    });
  }

  async checkPresenseInQueue(movieId) {
    return new Promise(async resolve => {
      onAuthStateChanged(this.#AUTH, async user => {
        if (user) {
          let userId = user.uid;
          const reference = ref(
            this.#DATABASE,
            `users_library/${userId}/queue/${movieId}`
          );
          const snapshot = await get(reference);
          if (snapshot.exists()) {
            resolve(true);
          } else {
            resolve(false);
          }
        }
      });
    });
  }

  async addToWatched(movieObj) {
    const user = await new Promise(resolve => {
      onAuthStateChanged(this.#AUTH, user => resolve(user));
    });
    if (user) {
      const userId = user.uid;
      const reference = ref(
        this.#DATABASE,
        `users_library/${userId}/watched/${movieObj.id}`
      );

      await set(reference, movieObj);
    }
  }

  async addToQueue(movieObj) {
    const user = await new Promise(resolve => {
      onAuthStateChanged(this.#AUTH, user => resolve(user));
    });
    if (user) {
      const userId = user.uid;
      const reference = ref(
        this.#DATABASE,
        `users_library/${userId}/queue/${movieObj.id}`
      );

      await set(reference, movieObj);
    }
  }

  async getWatchedList() {
    const user = await new Promise(resolve =>
      onAuthStateChanged(this.#AUTH, resolve)
    );
    if (!user) return;

    const userId = user.uid;
    const reference = ref(this.#DATABASE, `users_library/${userId}/watched/`);

    const snapshot = await get(reference);
    if (snapshot.exists) {
      const moviesObject = snapshot.val();
      const moviesArray = Object.keys(moviesObject).map(key => {
        return moviesObject[key];
      });
      return moviesArray;
    }
  }

  async getQueueList() {
    const user = await new Promise(resolve =>
      onAuthStateChanged(this.#AUTH, resolve)
    );
    if (!user) return;

    const userId = user.uid;
    const reference = ref(this.#DATABASE, `users_library/${userId}/queue/`);

    const snapshot = await get(reference);
    if (snapshot.exists) {
      const moviesObject = snapshot.val();
      const moviesArray = Object.keys(moviesObject).map(key => {
        return moviesObject[key];
      });
      return moviesArray;
    }
  }

  async removeMovieFromWatched(movieId) {
    const user = await new Promise(resolve => {
      onAuthStateChanged(this.#AUTH, user => resolve(user));
    });
    if (user) {
      const userId = user.uid;
      const reference = ref(
        this.#DATABASE,
        `users_library/${userId}/watched/${movieId}`
      );

      await remove(reference);
    }
  }

  async removeMovieFromQueue(movieId) {
    const user = await new Promise(resolve => {
      onAuthStateChanged(this.#AUTH, user => resolve(user));
    });
    if (user) {
      const userId = user.uid;
      const reference = ref(
        this.#DATABASE,
        `users_library/${userId}/queue/${movieId}`
      );

      await remove(reference);
    }
  }
}
