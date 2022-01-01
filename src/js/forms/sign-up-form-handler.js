import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';

import { auth, db } from '../service/firebase-service';
import { firebaseAuthErrors } from '../service/firebase-error-codes';
import { signUpElms } from '../dom/dom-elements';
import { alertHandle } from '../alerts-handler';
import { showPreloader, toggleFormButtonsState } from '../dom/dom-helpers';

signUpElms.signUpFormElm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = signUpElms.signUpEmailElm.value;
    const password = signUpElms.signUpPasswordElm.value;

    try {
        toggleFormButtonsState(signUpElms.signUpFormElm);

        const userCreds = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );

        showPreloader();
        toggleFormButtonsState(signUpElms.signUpFormElm, false);

        alertHandle('Пользователь успешно зарегистрирован', 'success');

        await addDoc(collection(db, 'users'), {
            email: userCreds.user.email,
        });

        signUpElms.signUpEmailElm.value = '';
        signUpElms.signUpPasswordElm.value = '';
    } catch (error) {
        toggleFormButtonsState(signUpElms.signUpFormElm, false);

        let errorMessage = 'Ошибка сервиса авторизации. Попробуйте позже';
        if (firebaseAuthErrors[error.code]) {
            errorMessage = firebaseAuthErrors[error.code];
        }

        alertHandle(errorMessage, 'error');
    }
});
