import { signOut } from 'firebase/auth';

import { auth } from '../service/firebase-service';
import { headerElms, signInElms, signUpElms } from '../dom/dom-elements';

headerElms.authLogoutElm.addEventListener('click', async () => {
    await signOut(auth);

    signInElms.signInFormElm.classList.remove('auth__form-item--hidden');
    signUpElms.signUpFormElm.classList.add('auth__form-item--hidden');
});
