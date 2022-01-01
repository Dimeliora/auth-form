import { createUserWithEmailAndPassword } from 'firebase/auth';

import { auth } from './firebase-service';
import { signUpElms } from './dom-elements';

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
    } catch (error) {
        console.log(error.code);
        console.log(error.message);
    }
});
