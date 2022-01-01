import { onAuthStateChanged } from 'firebase/auth';

import { auth } from './firebase-service';
import { preloaderElms, mainElms } from './dom-elements';

preloaderElms.preloaderBlockElm.classList.remove('preloader--hidden');
mainElms.containerElm.classList.add('container--hidden');

onAuthStateChanged(auth, (user) => {
    if (user) {
    } else {
        preloaderElms.preloaderBlockElm.classList.add('preloader--hidden');
        mainElms.containerElm.classList.remove('container--hidden');
    }
});
