const { Router } = require('express');

const { getAllUsersController } = require('../controllers/users.controller');

const usersRouter = Router();

usersRouter.get('/', getAllUsersController);

module.exports = usersRouter;
