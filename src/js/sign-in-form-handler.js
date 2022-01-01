import { signInWithEmailAndPassword } from 'firebase/auth';

import { auth } from './firebase-service';
import { firebaseAuthErrors } from './configs/firebase-error-codes';
import { signInElms } from './dom-elements';
import { alertHandle } from './alerts-handler';
import { showPreloader, hidePreloader } from './dom-helpers';

signInElms.signInFormElm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = signInElms.signInEmailElm.value;
    const password = signInElms.signInPasswordElm.value;

    try {
        showPreloader();

        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        hidePreloader();

        let errorMessage = 'Ошибка сервиса авторизации. Попробуйте позже';
        if (firebaseAuthErrors[error.code]) {
            errorMessage = firebaseAuthErrors[error.code];
        }

        alertHandle(errorMessage, 'error');
    }
});
