const fastify = require('fastify');
const { jwt } = require('./plugins');
const {
    userRoutes
} = require('./routes');

const server = function ({port}) {
    const _fastify = fastify({
        logger: true
    });

    const _registerPlugins = async () => {
        _fastify.log.info('Registering plugins...');
        await _fastify.register(jwt);
    }

    const _registerRoutes = async () => {
        _fastify.log.info('Registering routes...');
        await _fastify.register(userRoutes);
    }


    this.start = async () => {
        try {
            await _registerPlugins();
            await _registerRoutes();
            await _fastify.listen(port, '0.0.0.0');
        } catch (e) {
            _fastify.log.error(e);
            process.exit(1);
        }
    }
}

module.exports = server;