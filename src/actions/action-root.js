/*
 * File: /Users/michaelbeeson/Documents/VSCode/react004-react16/book-redux/src/actions/action-root.js
 */

export function selectBook(book) {
  // selectBook is an ActionCreator,
  // must return an action: an object with a type property
  console.log(`BOOK SELECTED: ${book.title}`);
  return {
    type: "BOOK_SELECTED",
    payload: book
  };
}
