import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import sortBy from 'sort-by'
import Bookshelf from './Bookshelf.js'

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
          <Bookshelf books={this.props.books} moveBook={this.props.moveBook} shelf="currentlyReading" shelfName="Currently Reading"/>
        </div>
        <div>
          <Bookshelf books={this.props.books} moveBook={this.props.moveBook} shelf="wantToRead" shelfName="Want To Read"/>
        </div>
        <div>
          <Bookshelf books={this.props.books} moveBook={this.props.moveBook} shelf="read" shelfName="Read"/>
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
