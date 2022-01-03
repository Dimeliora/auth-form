import { onAuthStateChanged, signOut } from 'firebase/auth';
import { collection, getDocs } from 'firebase/firestore';

import { auth, db } from '../service/firebase-service';
import {
    headerElms,
    mainElms,
    signInElms,
    signUpElms,
} from '../dom/dom-elements';
import {
    showPreloader,
    hidePreloader,
    updateUsersList,
} from '../dom/dom-helpers';

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

        mainElms.authBlockElm.classList.remove('auth--hidden');
        mainElms.usersBlockElm.classList.add('users--hidden');
        headerElms.authUserElm.classList.add('header__user--hidden');
    }
});

headerElms.authLogoutElm.addEventListener('click', async () => {
    await signOut(auth);

    signInElms.signInFormElm.classList.remove('auth__form-item--hidden');
    signUpElms.signUpFormElm.classList.add('auth__form-item--hidden');
});
