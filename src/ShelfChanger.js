import React, { Component } from 'react'

class ShelfChanger extends Component {
  static defaultProps = {
    book: {shelf: "none"},
    thumbnail: ''
  };

  handleChange = (value, book) => {

      return this.props.moveBook(value, book);

  };
  render(){
    return(
      <div className="book-shelf-changer">
        <select value={this.props.book.shelf} onChange={(event) => this.handleChange(event.target.value, this.props.book)}>
          <option value="" disabled>Move to...</option>
          <option value="none">None</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
        </select>
      </div>
    )
  };
};

export default ShelfChanger
