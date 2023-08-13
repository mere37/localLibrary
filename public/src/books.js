function findAuthorById(authors, id) {
  // YOUR SOLUTION HERE
  let authorObject = authors.find(author => author.id == id)
  return authorObject;
}

function findBookById(books, id) {
  // YOUR SOLUTION HERE
  let bookObject = books.find(book => book.id == id)
  return bookObject;
}


// NOTE: YOU DON'T HAVE TO EDIT THE FUNCTIONS BELOW
function partitionBooksByBorrowedStatus(books) {
  const returned = books.filter((book) => book.borrows[0].returned);
  const unreturned = books.filter ((book) => !book.borrows[0].returned);
  return [unreturned, returned];
}

function getBorrowersForBook(book, accounts) {
    const { borrows } = book;
      const renters = borrows.map(({ id, returned })=> {
            const account = accounts.find(account => account.id === id);
      
      return {
        ...account,
        returned,
      };
    });


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
