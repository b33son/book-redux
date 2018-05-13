/*
 * File: /Users/michaelbeeson/Documents/VSCode/react004-react16/book-redux/src/containers/book-list.js
 */

import React, { Component } from "react";
import { connect } from "react-redux";
import { selectBook } from "../actions/action-root";
import { bindActionCreators } from "redux";

export class BookList extends Component {
  renderList() {
    return this.props.books.map(book => {
      return (
        <li
          onClick={() => {
            this.props.selectBook(book);
          }}
          key={book.title}
          className="list-group-item"
        >
          {book.title}
        </li>
      );
    });
  }
  render() {
    return <ul className="list-group col-sm-4">{this.renderList()}</ul>;
  }
}

const mapStateToProps = state => {
  // whatever is returned from here will
  // show up as props inside of BookList
  return { books: state.books };
};

function mapDispatchToProps(dispatch) {
  // When selectBook is called, the result is passed
  // to all reducers

  // Anything returned from this function will become
  // props on the BookList container
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// Promote BookList from a component to a container
// BookList must know about the dispatch method, selectBook.
// Make selectBook available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
