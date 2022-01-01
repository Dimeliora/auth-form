import { onAuthStateChanged } from 'firebase/auth';

import { auth } from './firebase-service';
import { headerElms, mainElms } from './dom-elements';
import { showPreloader, hidePreloader } from './dom-helpers';

showPreloader();

onAuthStateChanged(auth, (user) => {
    hidePreloader();

    if (user) {
        mainElms.authBlockElm.classList.add('auth--hidden');
        mainElms.usersBlockElm.classList.remove('users--hidden');
        headerElms.authUserElm.classList.remove('header__user--hidden');
    } else {
        headerElms.authUserElm.classList.add('header__user--hidden');
        mainElms.usersBlockElm.classList.add('users--hidden');
    }
});
