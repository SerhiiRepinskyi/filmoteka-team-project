import { firebaseApp } from './firebaseInit';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getDatabase, ref, set, onValue, push } from 'firebase/database';
import { refs } from './signInModalRefs';

const auth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);

// function writeUserData(userId, name, email, imageUrl) {
//   const reference = ref(database, 'users/' + userId);

//   set(reference, {
//     username: name,
//     email: email,
//     profile_picture: imageUrl,
//   });
// }

// writeUserData('MaxK', 'Max Kotyk', 'm@mail.com', 'img');

function getName(userId) {
  const referenceName = ref(database, 'users/' + userId);
  onValue(referenceName, snapshot => {
    console.log(snapshot.val());
  });
}

getName('MaxK');

const monitorAuthState = () => {
  onAuthStateChanged(auth, user => {
    if (user) {
      console.log(user.uid);
      console.log('user logged in');
      userId = user.uid;
    } else {
      console.log('user logged out');
    }
  });
};
monitorAuthState();
