const S = require('fluent-json-schema');

const responseSchema = () => {
    return S.object().prop('message', S.string()).prop('code', S.string());
}

module.exports = responseSchema;
