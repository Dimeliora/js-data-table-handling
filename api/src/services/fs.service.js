const fs = require('fs/promises');

const { delay } = require('../helpers/delay');
const { getDataPath } = require('../helpers/data-path');

exports.readAllUsersService = async () => {
    const usersDataJSON = await fs.readFile(getDataPath());

    await delay(3000);

    return JSON.parse(usersDataJSON);
};
