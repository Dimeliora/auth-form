import { preloaderElms, mainElms } from './dom-elements';
import { createUsersListHTML } from './template-creators';

export const showPreloader = () => {
    preloaderElms.preloaderBlockElm.classList.remove('preloader--hidden');
    mainElms.containerElm.classList.add('container--hidden');
};

export const hidePreloader = () => {
    preloaderElms.preloaderBlockElm.classList.add('preloader--hidden');
    mainElms.containerElm.classList.remove('container--hidden');
};

export const updateUsersList = (users) => {
    const usersListMarkup = createUsersListHTML(users);
    mainElms.usersWrapperElm.innerHTML = usersListMarkup;
};
