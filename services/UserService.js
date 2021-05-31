const UserRepository = require('../database/repositories/UserRepository');
const bcrypt = require('bcrypt');

const UserService = function () {
};

UserService.prototype.login = async ({username, password}) => {
    const user = await UserRepository.getByUsername(username);

    if (user) {
        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if (isPasswordCorrect)
            return user;
    }

    return null;
}

UserService.prototype.signup = async ({username, password}) => {
    const user = await UserRepository.getByUsername(username);

    if (user == null) {
        const hashedPassword = await bcrypt.hash(password, 10);

        return await UserRepository.post({username, password: hashedPassword});
    }

    return null;
}

module.exports = new UserService();