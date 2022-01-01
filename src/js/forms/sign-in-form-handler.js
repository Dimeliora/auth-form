import { signInWithEmailAndPassword } from 'firebase/auth';

import { auth } from '../service/firebase-service';
import { firebaseAuthErrors } from '../service/firebase-error-codes';
import { signInElms } from '../dom/dom-elements';
import { alertHandle } from '../alerts-handler';
import { showPreloader, hidePreloader } from '../dom/dom-helpers';

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
