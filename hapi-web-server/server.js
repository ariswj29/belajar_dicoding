const Hapi = require('@hapi/hapi');
const routes = require('./routes');
const todoRoutes = require('./todoRoutes');

const init = async () => {
    const server = Hapi.server({
        port: 5000,
        host: 'localhost',
    });

    // server.route(todoRoutes);
    server.route(
        {
            method: 'GET',
            path: '/',
            // Detailed notation
            handler: (request, h) => {
                const response = h.response('success');
                response.type('text/plain');
                response.header('X-Custom', 'some-value');
                return response;
            }
        },
        {
            method: 'POST',
            path: ' http://notesapp-v1.dicodingacademy.com/notes/notes',
            handler: (request, h)=>{
                const {body, tags, title} = request.payload;
                return `Selamat datang ${body}!`;
            }
        }
    )

 
    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
}
 
init();
