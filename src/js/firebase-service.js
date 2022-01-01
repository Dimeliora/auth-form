import { initializeApp } from 'firebase/app';
import {
    getAuth,
    setPersistence,
    browserLocalPersistence,
} from 'firebase/auth';

import { firebaseConfig } from './configs/firebase-config';

initializeApp(firebaseConfig);

const auth = getAuth();

setPersistence(auth, browserLocalPersistence);

export { auth };
