const UserService = require('../services/UserService');
const {signupRequestSchema, loginRequestSchema, loginResponseSchema} = require('../schemas/user');

const userRoutes = async (fastify) => {
    fastify.post('/users/signup', {
        schemas: {
            body: signupRequestSchema
        }
    }, async (req, reply) => {
        const {username, password} = req.body;
        const resp = await UserService.signup({username, password});

        if (resp) return reply.send({username: resp.username});

        reply.status(400).send({message: 'Signup failed.'});
    })

    fastify.post('/users/login', {
        schemas: {
            body: loginRequestSchema
        }
    }, async (req, reply) => {
        const {username, password} = req.body;
        const resp = await UserService.login({username, password});

        if (resp) {
            const token = await fastify.jwt.sign({username: resp.username});
            return reply.send({username: resp.username, token});
        }

        reply.status(400).send({message: 'Login failed.'});
    })
}

module.exports = userRoutes;