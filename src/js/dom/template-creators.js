export const createUsersListHTML = (users = []) => {
    let content = '<div class="users__notice">No registered users</div>';

    if (users.length > 0) {
        const listItems = users
            .map((user) => `<li class="users__list-item">${user}</li>`)
            .join(' ');

        content = `
            <ul class="users__list">
                ${listItems}
            </ul>
        `;
    }

    return `
        <h2 class="users__heading">Registered Users:</h2>
        ${content}
    `;
};
