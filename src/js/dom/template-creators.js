export const createUsersListHTML = (users = []) => {
    if (users.length === 0) {
        return '<div class="users__notice">No registered users</div>';
    }

    const listItems = users
        .map((user) => `<li class="users__list-item">${user}</li>`)
        .join(' ');

    return `
        <ul class="users__list">
            ${listItems}
        </ul>
    `;
};
