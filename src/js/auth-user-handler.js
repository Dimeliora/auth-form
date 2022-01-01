import { onAuthStateChanged } from 'firebase/auth';

import { auth } from './firebase-service';
import { preloaderElms, headerElms, mainElms } from './dom-elements';

preloaderElms.preloaderBlockElm.classList.remove('preloader--hidden');
headerElms.authUserElm.classList.add('header__user--hidden');
mainElms.containerElm.classList.add('container--hidden');
mainElms.usersBlockElm.classList.add('users--hidden');

onAuthStateChanged(auth, (user) => {
    preloaderElms.preloaderBlockElm.classList.add('preloader--hidden');
    mainElms.containerElm.classList.remove('container--hidden');

    if (user) {
        mainElms.authBlockElm.classList.add('auth--hidden');
        mainElms.usersBlockElm.classList.remove('users--hidden');
        headerElms.authUserElm.classList.remove('header__user--hidden');
    } else {
    }
});
