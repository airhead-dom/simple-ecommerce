const S = require('fluent-json-schema');
const responseSchema = require('../responseSchema');

const userLoginResponseSchema = responseSchema()
    .definition('data', S.object()
        .id('#data')
        .prop('username', S.string())
        .prop('email', S.string())
        .prop('token', S.string()))
    .prop('data', S.ref('#data'));

module.exports = userLoginResponseSchema;