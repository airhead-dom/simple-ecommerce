const fp = require('fastify-plugin');
const fastifyJwt = require('fastify-jwt');

const authenticate = async (fastify) => {
    fastify.register(fastifyJwt, {
        secret: 'supersecret'
    })

    fastify.decorate("authenticate", async (request, reply) => {
        try {
            fastify.log.info('Verifying token...');
            await request.jwtVerify();
        } catch (err) {
            fastify.log.error(err);
            reply.send(err)
        }
    })
}

module.exports = fp(authenticate);