const { readAllUsersService } = require('../services/fs.service');

exports.getAllUsersController = async (_, res) => {
    try {
        const users = await readAllUsersService();

        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Service error' });
    }
};
