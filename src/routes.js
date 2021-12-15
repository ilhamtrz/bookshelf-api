const { addBookHandler, getAllBooksHandler, getBookByIdHandler } = require('./handler');

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
];

module.exports = routes;
