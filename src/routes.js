const { addBookHandler, getAllBooksHandler } = require('./handler');

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

];

module.exports = routes;
