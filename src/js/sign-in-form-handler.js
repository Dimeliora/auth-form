import { signInWithEmailAndPassword } from 'firebase/auth';

import { auth } from './firebase-service';
import { firebaseAuthErrors } from './configs/firebase-error-codes';
import { signInElms } from './dom-elements';
import { alertHandle } from './alerts-handler';

signInElms.signInFormElm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = signInElms.signInEmailElm.value;
    const password = signInElms.signInPasswordElm.value;

    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        let errorMessage = 'Ошибка сервиса авторизации. Попробуйте позже';
        if (firebaseAuthErrors[error.code]) {
            errorMessage = firebaseAuthErrors[error.code];
        }

        alertHandle(errorMessage, 'error');
    }
});
