import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';

import { auth, db } from './firebase-service';
import { firebaseAuthErrors } from './configs/firebase-error-codes';
import { signUpElms } from './dom-elements';
import { alertHandle } from './alerts-handler';
import { showPreloader, hidePreloader } from './dom-helpers';

signUpElms.signUpFormElm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = signUpElms.signUpEmailElm.value;
    const password = signUpElms.signUpPasswordElm.value;

    try {
        showPreloader();

        const userCreds = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );

        alertHandle('Пользователь успешно зарегистрирован', 'success');

        await addDoc(collection(db, 'users'), {
            email: userCreds.user.email,
        });
    } catch (error) {
        hidePreloader();

        let errorMessage = 'Ошибка сервиса авторизации. Попробуйте позже';
        if (firebaseAuthErrors[error.code]) {
            errorMessage = firebaseAuthErrors[error.code];
        }

        alertHandle(errorMessage, 'error');
    }
});
