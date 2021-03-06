class UsersState {
    users = [];

    get paidAmount() {
        return this.users.reduce((total, user) => {
            if (user.paymentStatus === 'paid') {
                return total + user.amount;
            }

            return total;
        }, 0);
    }

    setUsers(users) {
        this.users = users;
    }

    getAllUsers() {
        return this.users;
    }

    getUser(userId) {
        return this.users.find((user) => user.id === userId);
    }

    updateUserStatus(userId) {
        const user = this.getUser(userId);
        if (!user) {
            return;
        }

        if (user.activityStatus === 'active') {
            user.activityStatus = 'inactive';
        } else {
            user.activityStatus = 'active';
        }
    }

    deleteUser(userId) {
        this.users = this.users.filter((user) => user.id !== userId);
    }
}

export default new UsersState();
