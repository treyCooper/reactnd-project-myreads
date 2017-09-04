import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import sortBy from 'sort-by'
import Book from './Book.js'

class Main extends Component {

  render(){
    const { books } = this.props;
    books.sort(sortBy('title'))
    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <Book books={this.props.books} moveBook={this.props.moveBook} shelf="currentlyReading"/>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
              <Book books={this.props.books} moveBook={this.props.moveBook} shelf="wantToRead"/>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
              </div>
            </div>
          </div>
        </div>
        <div className="open-search">
          <Link
          to="/search"
          >Add a book</Link>
        </div>
      </div>
    )
  }
}

export default Main
