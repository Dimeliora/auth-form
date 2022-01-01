import { v4 } from 'uuid';

import { alertElms } from './dom-elements';

const alertTypeClassnames = {
    error: 'alert__item--error',
    success: 'alert__item--success',
};

const createAlertHTML = (id, message, type) => {
    const typeClass = alertTypeClassnames[type];

    return `
        <div class="alert__item ${typeClass}" id="${id}">
            <svg class="alert__item-icon">
                <use href="/icons/icon-sprite.svg#alert-error" />
            </svg>
            <span>${message}</span>
        </div>
    `;
};

export const alertHandle = (message, type) => {
    const alertId = `alert-${v4()}`;
    const alertTemplate = createAlertHTML(alertId, message, type);

    alertElms.alertBlocknElm.insertAdjacentHTML('beforeend', alertTemplate);

    const alertElm = alertElms.alertBlocknElm.querySelector(`#${alertId}`);

    const alertTimerId = setTimeout(() => {
        alertElm.style.opacity = 0;
    }, 5000);

    alertElm.addEventListener('transitionend', () => {
        alertElm.remove();
    });

    alertElm.addEventListener('click', () => {
        clearTimeout(alertTimerId);
        alertElm.remove();
    });
};
