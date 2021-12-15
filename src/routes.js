const {
  addBookHandler, getAllBooksHandler, getBookByIdHandler, editBookByIdHandler,
} = require('./handler');

const routes = [
  // Method dan route untuk menambahkan buku
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },

  // Method dan route untuk mendapatkan semua buku
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },

  // Method dan route untuk mendapatkan semua buku
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getBookByIdHandler,
  },

  // Method dan route untuk mengedit buku
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: editBookByIdHandler,
  },
];

module.exports = routes;
