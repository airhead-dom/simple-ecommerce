const fp = require('fastify-plugin');

const dbConnector = async (fastify, opts) => {
    fastify.register(require('fastify-mongodb'), {
        url: ''
    })
}

module.exports = fp(dbConnector);