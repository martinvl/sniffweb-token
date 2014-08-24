var crypto = require('crypto');

function getKey(taskKey, name) {
    return taskKey + '_' + name;
}

function generateToken(taskKey, name) {
    var hash = crypto.createHash('sha256');
    hash.update(getKey(taskKey, name));

    return hash.digest('base64');
}

function verifyToken(token, taskKey, name) {
    return token == generateToken(taskKey, name);
}

module.exports = {
    generate: generateToken,
    verify: verifyToken
};
