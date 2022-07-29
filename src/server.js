const http = require('http');
const PORT = process.env.PORT || 5000;

const server = http.createServer(async (req, res) => {
    if(req.url === "/" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.write("Hello World\nThis server doesn't have express! xD");
        res.end();
    } else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Route not found "}));
    }
})

server.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})
