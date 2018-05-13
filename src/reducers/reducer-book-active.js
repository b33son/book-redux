/*
 * File: /Users/michaelbeeson/Documents/VSCode/react004-react16/book-redux/src/reducers/reducer-book-active.js
 */

// state arg is not application state
// state arg is only the state for which this reducer is responsible
// NOTE: set state to null by default to prevent returning
// undefined in the case that no book is selected
export default function(state = null, action) {
  switch (action.type) {
    case "BOOK_SELECTED":
      return action.payload;
  }
  return state;
}
