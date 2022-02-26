import users from './users-mocks'

class UsersState {
    users = users;

    getUsers() {
        return this.users;
    }
}

export default new UsersState();
