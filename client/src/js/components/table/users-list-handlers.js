export const filterUsersByPaymentStatus = (filterValue) => (users) => {
    if (filterValue === 'all') {
        return users;
    }

    return users.filter((user) => user.paymentStatus === filterValue);
};

export const filterUsersByActivityStatus = (filterValue) => (users) => {
    if (filterValue === 'all') {
        return users;
    }

    return users.filter((user) => user.activityStatus === filterValue);
};

export const searchUsersByProperties = (searchValue, properties) => (users) => {
    if (searchValue.length === 0) {
        return users;
    }

    return users.filter((user) =>
        properties.some((prop) =>
            user[prop].toLowerCase().includes(searchValue)
        )
    );
};

export const sortUsersListByProperty = (sortBy) => (users) => {
    if (sortBy === 'default') {
        return users;
    }

    return [...users].sort((a, b) => (a[sortBy] > b[sortBy] ? 1 : -1));
};
