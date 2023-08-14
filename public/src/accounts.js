const { findAuthorById } = require("./books");

function findAccountById(accounts, id) {
  // YOUR SOLUTION HERE
  // Hint: You can use the [`find()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find) method here.
  let result = accounts.find((account) => account.id === id);
  return result;
}

function sortAccountsByLastName(accounts) {
  // YOUR SOLUTION HERE
  // Hint: You can use the [`sort()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) method here. 
  return accounts.sort((accountA, accountB) =>
    accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1
  );
}
function getAccountFullNames(accounts) {
  // YOUR SOLUTION HERE
  // Hint: You can use the [`map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) method here.

  const result = accounts.map((acct) => `${acct.name.first} ${acct.name.last}`);

  return result;
}
function getTotalNumberOfBorrows(account, books) {
  const accountSerial = account.id;
  let total = 0;
  for (let i = 0; i < books.length; i++) {
    let bookBorrows = books[i].borrows;
    if (bookBorrows.some((borrowInfo) => borrowInfo.id === accountSerial))
      total += 1;
  }

  return total;
}

function getBooksPossessedByAccount(account, books, authors) {
  let result = [];
  const accountId = account.id;

  let bookMatches = [];
  books.filter((book) =>
    book.borrows.filter((detail) => {
      const isId = detail.id === accountId;
      const notReturned = !detail.returned;
      if (isId && notReturned) {
        bookMatches.push(book);
      }
    })
  );

  bookMatches.forEach((bookMatch) => {
    let author = findAuthorById(authors, bookMatch.authorId);
    return result.push({ ...bookMatch, author });
  });

  return result;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getAccountFullNames,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};