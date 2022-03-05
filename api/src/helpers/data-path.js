const path = require('path');

const rootDir = path.dirname(
    require.main.filename || process.mainModule.filename
);

exports.getDataPath = () => path.resolve(rootDir, '../data', 'users.json');
