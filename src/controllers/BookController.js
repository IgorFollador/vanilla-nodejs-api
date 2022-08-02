const db = require('../database/data');

class BookController {
    
    async readBooks() {
        return new Promise((resolve, _) => resolve(db));
    }

    async createBook(formBook) {
        return new Promise((resolve, _) => {
            let newId = data.find((todo) => { 
                
                todo.id === parseInt(id)}
            );

            let newBook = {
                id: newId, 
                ...formBook
            };

            resolve(newBook);
        });
    } 

}

module.exports = BookController;