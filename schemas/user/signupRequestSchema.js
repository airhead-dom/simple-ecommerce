const S = require('fluent-json-schema');

const userSignupRequestSchema = S.object()
        .prop('username', S.string().format(S.FORMATS.EMAIL).required())
        .prop('password', S.string().required());

module.exports = userSignupRequestSchema;