import React, { Component } from 'react'
import ShelfChanger from './ShelfChanger.js'

class Book extends Component {


  render(){
    console.log('this from book', this);
    return(
      <ol className="books-grid">
    {this.props.books.filter((c) => c.shelf === "currentlyReading").map((book) => (
      <li key={book.id} >
      <div className="book">
        <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193,
          backgroundImage:`url(${book.imageLinks.thumbnail})`
        }}/>
        <ShelfChanger book={book} name={book.title} moveBook={this.props.moveBook}/>
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
