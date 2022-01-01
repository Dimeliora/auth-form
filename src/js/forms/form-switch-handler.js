import { signInElms, signUpElms } from '../dom/dom-elements';

let isFormTransitionStarted = false;

signUpElms.signUpFormElm.classList.add('auth__form-item--hidden');

signInElms.signInSwitchElm.addEventListener('click', () => {
    signUpElms.signUpFormElm.classList.add('auth__form-item--hidden');
    isFormTransitionStarted = true;
});

signUpElms.signUpSwitchElm.addEventListener('click', () => {
    signInElms.signInFormElm.classList.add('auth__form-item--hidden');
    isFormTransitionStarted = true;
});

signUpElms.signUpFormElm.addEventListener('transitionend', (e) => {
    if (e.target === signUpElms.signUpFormElm && isFormTransitionStarted) {
        signInElms.signInFormElm.classList.remove('auth__form-item--hidden');
        isFormTransitionStarted = false;
    }
});

signInElms.signInFormElm.addEventListener('transitionend', (e) => {
    if (e.target === signInElms.signInFormElm && isFormTransitionStarted) {
        signUpElms.signUpFormElm.classList.remove('auth__form-item--hidden');
        isFormTransitionStarted = false;
    }
});
