/*
 * File: /Users/michaelbeeson/Documents/VSCode/react004-react16/book-redux/src/reducers/reducer-root.js
 */

import { combineReducers } from "redux";
import BooksReducer from "./reducer-books";
import ActiveBookReducer from "./reducer-book-active";

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBookReducer
});

export default rootReducer;
