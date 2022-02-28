import users from './users-mocks';

class UsersState {
    users = users;

    getAllUsers() {
        return this.users;
    }

    getUser(userId) {
        return this.users.find((user) => user.id === userId);
    }

    updateUserStatus(userId) {
        const user = this.getUser(userId);
        if (user) {
            user.isActive = !user.isActive;
        }
    }
}

export default new UsersState();
