import { onAuthStateChanged } from 'firebase/auth';
import { collection, getDocs } from 'firebase/firestore';

import { auth, db } from './service/firebase-service';
import { headerElms, mainElms } from './dom/dom-elements';
import {
    showPreloader,
    hidePreloader,
    updateUsersList,
} from './dom/dom-helpers';

showPreloader();

onAuthStateChanged(auth, async (user) => {
    if (user) {
        const querySnapshot = await getDocs(collection(db, 'users'));
        const users = querySnapshot.docs.map((doc) => doc.data().email);
        updateUsersList(users);

        hidePreloader();

        headerElms.authUsernameElm.textContent = user.email;

        mainElms.authBlockElm.classList.add('auth--hidden');
        mainElms.usersBlockElm.classList.remove('users--hidden');
        headerElms.authUserElm.classList.remove('header__user--hidden');
    } else {
        hidePreloader();

        headerElms.authUserElm.classList.add('header__user--hidden');
        mainElms.usersBlockElm.classList.add('users--hidden');
        mainElms.authBlockElm.classList.remove('auth--hidden');
    }
});
