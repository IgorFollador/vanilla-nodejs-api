const bookController = require('../controllers/BookController');

async function tryHandleBooksRequest(req, res) {
    if (req.method === "GET" && req.url === "/api/books") {
        await bookController.readBooks(req, res);
        return true;
    }

    if (req.method === "POST" && req.url === "/api/books") {
        await create(req, res);
        return true;
    }   

    return false;
}

module.exports = { tryHandleBooksRequest }