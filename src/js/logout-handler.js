import { signOut } from 'firebase/auth';

import { auth } from './service/firebase-service';
import { headerElms } from './dom/dom-elements';

headerElms.authLogoutElm.addEventListener('click', async () => {
    await signOut(auth);
});
