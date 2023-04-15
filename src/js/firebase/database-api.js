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
          `users_library/${userId}/watched/`
        );

        push(reference, movieObj);
        console.log('Movie added to watched');
      }
    });
  }

  addToQueue(movieObj) {
    onAuthStateChanged(this.#AUTH, user => {
      if (user) {
        let userId = user.uid;
        const reference = ref(this.#DATABASE, `users_library/${userId}/queue/`);

        push(reference, movieObj);
        console.log('Movie added to queue');
      }
    });
  }

  getWatchedList() {
    onAuthStateChanged(this.#AUTH, user => {
      if (user) {
        let userId = user.uid;

        const reference = ref(
          this.#DATABASE,
          `users_library/${userId}/watched/`
        );

        onValue(reference, snapshot => {
          if (snapshot.val() === undefined || snapshot.val() === null) {
            return;
          }
          console.log(Object.values(snapshot.val()));
          return Object.values(snapshot.val());
        });
      }
    });
  }

  getQueueList() {
    onAuthStateChanged(this.#AUTH, user => {
      if (user) {
        let userId = user.uid;

        const reference = ref(this.#DATABASE, `users_library/${userId}/queue/`);

        onValue(reference, snapshot => {
          if (snapshot.val() === undefined || snapshot.val() === null) {
            return;
          }
          console.log(Object.values(snapshot.val()));
          return Object.values(snapshot.val());
        });
      }
    });
  }

  getListItem(list, movieId) {
    for (const key in list) {
      if (list[key].id === movieId) {
        console.log(key);
        return key;
      }
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

        const itemToRemove = this.getListItem(snapshot.val(), movieId);

        const refToRemove = ref(
          this.#DATABASE,
          `users_library/${userId}/watched/${itemToRemove}`
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

        const itemToRemove = this.getListItem(snapshot.val(), movieId);

        const refToRemove = ref(
          this.#DATABASE,
          `users_library/${userId}/queue/${itemToRemove}`
        );

        remove(refToRemove);
        console.log('Movie removed from queue');
      });
    });
  }
}
