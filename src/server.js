const http = require('http');
const router = require('./routes/index');

const PORT = process.env.PORT || 8000;

const server = http.createServer(async (req, res) => router.serve)

server.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})
