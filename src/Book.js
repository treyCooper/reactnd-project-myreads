import React, { Component } from 'react'

class Book extends Component {

shelfChange = (value) => {
  console.log('this.props from shelfchange', this);
}
  render(){
    console.log('this.props from book', this.props.books);
    return(
      <ol className="books-grid">
    {this.props.books.map((book) => (
      <li key={book.id} >
      <div className="book">
        <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193,
          backgroundImage:`url(${book.imageLinks.thumbnail})`
        }}/>
      <div className="book-shelf-changer">
        <select value={book.shelf} onChange={(event) => this.shelfChange(event.target.value)}>
          <option value="none" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors[0]} {book.authors[1]}</div>
      </div>
      </li>
      ))}
      </ol>
    )
  }
}

export default Book
