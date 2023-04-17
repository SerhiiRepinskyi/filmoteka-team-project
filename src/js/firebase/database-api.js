import { firebaseApp } from './firebase-init';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import {
  getDatabase,
  ref,
  set,
  onValue,
  update,
  push,
  remove,
  get,
} from 'firebase/database';

export class DatabaseAPI {
  #AUTH = getAuth(firebaseApp);
  #DATABASE = getDatabase(firebaseApp);

  addToWatched(movieObj) {
    onAuthStateChanged(this.#AUTH, user => {
      if (user) {
        let userId = user.uid;
        const reference = ref(
          this.#DATABASE,
          `users_library/${userId}/watched/${movieObj.id}`
        );
        get(reference).then(snapshot => {
          if (snapshot.exists()) {
            console.log(`'${movieObj.title}' is already in the Watched List`);
            return;
          } else {
            set(reference, movieObj);
            console.log(`'${movieObj.title}' added to Watched List`);
          }
        });
      }
    });
  }

  addToQueue(movieObj) {
    onAuthStateChanged(this.#AUTH, user => {
      if (user) {
        let userId = user.uid;
        const reference = ref(
          this.#DATABASE,
          `users_library/${userId}/queue/${movieObj.id}`
        );

        get(reference).then(snapshot => {
          if (snapshot.exists()) {
            console.log(`'${movieObj.title}' is already in the Queue List`);
            return;
          } else {
            set(reference, movieObj);
            console.log(`'${movieObj.title}' added to Queue List`);
          }
        });
      }
    });
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
      console.log(moviesArray);
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
      console.log(moviesArray);
      return moviesArray;
    }
  }

  removeMovieFromWatched(movieId) {
    onAuthStateChanged(this.#AUTH, user => {
      let userId = user.uid;

      const reference = ref(this.#DATABASE, `users_library/${userId}/watched/`);

      onValue(reference, snapshot => {
        if (snapshot.val() === undefined || snapshot.val() === null) {
          return;
        }

        const refToRemove = ref(
          this.#DATABASE,
          `users_library/${userId}/watched/${movieId}`
        );

        remove(refToRemove);
        console.log('Movie removed from watched');
      });
    });
  }

  removeMovieFromQueue(movieId) {
    onAuthStateChanged(this.#AUTH, user => {
      let userId = user.uid;

      const reference = ref(this.#DATABASE, `users_library/${userId}/queue/`);

      onValue(reference, snapshot => {
        if (snapshot.val() === undefined || snapshot.val() === null) {
          return;
        }

        const refToRemove = ref(
          this.#DATABASE,
          `users_library/${userId}/queue/${movieId}`
        );

        remove(refToRemove);
        console.log('Movie removed from queue');
      });
    });
  }
}
