import { preloaderElms, mainElms } from './dom-elements';

export const showPreloader = () => {
    preloaderElms.preloaderBlockElm.classList.remove('preloader--hidden');
    mainElms.containerElm.classList.add('container--hidden');
};

export const hidePreloader = () => {
    preloaderElms.preloaderBlockElm.classList.add('preloader--hidden');
    mainElms.containerElm.classList.remove('container--hidden');
};
