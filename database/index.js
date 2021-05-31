const database = function (url) {
    const _mongoose = require('mongoose');

    this.start = async () => {
        await _mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});

        // load all models
        require('./models/UserModel');
    }
}

module.exports = database;