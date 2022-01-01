import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import {
    getAuth,
    setPersistence,
    browserLocalPersistence,
} from 'firebase/auth';

import { firebaseConfig } from './configs/firebase-config';

initializeApp(firebaseConfig);

const db = getFirestore();

const auth = getAuth();

setPersistence(auth, browserLocalPersistence);

export { auth, db };
