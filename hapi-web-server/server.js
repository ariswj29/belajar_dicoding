const Hapi = require('@hapi/hapi');
const routes = require('./routes');
const todoRoutes = require('./todoRoutes');

const init = async () => {
    const server = Hapi.server({
        port: 5000,
        host: 'localhost',
    });

    server.route(todoRoutes);

 
    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
}
 
init();
