const UserModel = require('../models/UserModel');

const UserRepository = function () {};

UserRepository.prototype.getByUsername = (username) => {
    const query = UserModel.findOne({username});
    return query.exec();
}

UserRepository.prototype.post = ({ username, password }) => {
    const doc = new UserModel({ username, password });
    return doc.save();
}

module.exports = new UserRepository();