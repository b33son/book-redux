/*
 * File: /Users/michaelbeeson/Documents/VSCode/react004-react16/book-redux/src/App.js
 */

import React, { Component } from "react";
import { Provider } from "react-redux";
import BookList from "./containers/book-list";
import BookDetail from "./containers/book-detail";
const createStore = require("redux").createStore;
const reducers = require("./reducers/reducer-root").default;

let store = createStore(reducers);

export default class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <div>
            <BookList />
            <BookDetail />
          </div>
        </Provider>
      </div>
    );
  }
}
