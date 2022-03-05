const express = require('express');

const usersRouter = require('./routes/users.routes');

const PORT = process.env.PORT || 3005;

const app = express();

app.use(express.json());

app.use('/api/users', usersRouter);

app.listen(PORT, () => console.log(`Server is up on ${PORT} port`));
