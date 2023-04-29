const http = require('http');
 
const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.statusCode = 200;
    const {method, url} = request;

    if (method === "GET" && url === "/"){
        response.end("<h1>Data beranda berhasil ditampilkan!</h1>");
    }
    if (method === "GET" && url === "/about"){
        response.end("<h1>Data tentang berhasil ditampilkan!</h1>");
    }
    if (method === "POST"){
        let body = [];

        request.on('data', (chunk) => {
            body.push(chunk);
        });

        request.on('end', () => {
            body = Buffer.concat(body).toString();
            const {name, chance} = JSON.parse(body);
            response.end(`<h1>Hai, ${name}! ini adalah server NodeJS ${chance}!</h1>`);
        });

    }
};
 
 
const server = http.createServer(requestListener);
 
const port = 5000;
const host = 'localhost';
 
server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});

// ~~cara send~~ //
// curl -X GET http://localhost:5000
// curl -X POST -H "Content-Type: application/json"  http://localhost:5000 -d "{\"name\": \"Dicoding\", \"chance\": \"Submission\"}"