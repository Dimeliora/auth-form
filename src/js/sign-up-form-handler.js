import { createUserWithEmailAndPassword } from 'firebase/auth';

import { auth } from './firebase-service';
import { firebaseAuthErrors } from './configs/firebase-error-codes';
import { signUpElms } from './dom-elements';
import { alertHandle } from './alerts-handler';

signUpElms.signUpFormElm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = signUpElms.signUpEmailElm.value;
    const password = signUpElms.signUpPasswordElm.value;

    try {
        const credentials = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );

        console.log(credentials);
        alertHandle('Пользователь успешно зарегистрирован', 'success');
    } catch (error) {
        let errorMessage = 'Ошибка сервиса авторизации. Попробуйте позже';
        if (firebaseAuthErrors[error.code]) {
            errorMessage = firebaseAuthErrors[error.code];
        }

        alertHandle(errorMessage, 'error');
    }
});
