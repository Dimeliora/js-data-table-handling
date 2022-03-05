const fs = require('fs/promises');

const { getDataPath } = require('../helpers/data-path');

exports.readAllUsersService = async () => {
    const usersDataJSON = await fs.readFile(getDataPath());

    return JSON.parse(usersDataJSON);
};
