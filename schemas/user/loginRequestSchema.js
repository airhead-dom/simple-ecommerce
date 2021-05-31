const S = require('fluent-json-schema');

const userLoginRequestSchema = S.object()
        .prop('username', S.string().format(S.FORMATS.EMAIL).required())
        .prop('password', S.string());

module.exports = userLoginRequestSchema;