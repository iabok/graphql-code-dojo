var books = require('../database')

module.exports = {
    findBookIndex: function (id) {
        return books.findIndex(function (book) {
            return book.id === id;
        });
    },
    findOne: function (id) {
        if (typeof id === 'undefined') {
            throw Error('Book id is required');
        }
        var bookIndex = this.findBookIndex(id);

        if (bookIndex === -1) {
            throw Error('Book not found');
        }
        return books.filter(function (book) {
            return book.id === id;
        })[0];
    },
    findAll: function () {
        return books;
    },
    createBook: function (book) {
        var bookDetails = { ...book, ...{ id: books.length + 1 } };
        books.push(bookDetails);
        return bookDetails;
    },
    updateBook: function (id, bookDetails) {
        if (typeof id === 'undefined') {
            throw Error('Book id is required');
        }
        var bookIndex = this.findBookIndex(id);
        if (bookIndex === -1) {
            throw Error('Book not found');
        }
        var updateDeatils = {}
        books = books.map(function (book) {
            if (book.id === id) {
                updateDeatils = { ...book, ...bookDetails };
                return updateDeatils
            }
            return book;
        })

        return updateDeatils;
    },
    deleteBook: function (id) {
        if (typeof id === 'undefined') {
            throw Error('Book id is required');
        }
        var bookIndex = this.findBookIndex(id);
        if (bookIndex === -1) {
            throw Error('Book not found');
        }
        books.splice(bookIndex, 1);
        return books;
    }
};