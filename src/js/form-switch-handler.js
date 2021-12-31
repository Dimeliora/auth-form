import { formsElms } from './dom-elements';

let isFormTransitionStarted = false;

formsElms.signUpFormElm.classList.add('auth__form-item--hidden');

formsElms.signInSwitchElm.addEventListener('click', () => {
    formsElms.signUpFormElm.classList.add('auth__form-item--hidden');
    isFormTransitionStarted = true;
});

formsElms.signUpSwitchElm.addEventListener('click', () => {
    formsElms.signInFormElm.classList.add('auth__form-item--hidden');
    isFormTransitionStarted = true;
});

formsElms.signUpFormElm.addEventListener('transitionend', (e) => {
    if (e.target === formsElms.signUpFormElm && isFormTransitionStarted) {
        formsElms.signInFormElm.classList.remove('auth__form-item--hidden');
        isFormTransitionStarted = false;
    }
});

formsElms.signInFormElm.addEventListener('transitionend', (e) => {
    if (e.target === formsElms.signInFormElm && isFormTransitionStarted) {
        formsElms.signUpFormElm.classList.remove('auth__form-item--hidden');
        isFormTransitionStarted = false;
    }
});
