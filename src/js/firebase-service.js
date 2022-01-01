import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

import { firebaseConfig } from './configs/firebase-config';

initializeApp(firebaseConfig);

export const auth = getAuth();
