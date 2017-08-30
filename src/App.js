import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Book from './Book.js'
import Search from './Search.js'

class BooksApp extends React.Component {
  state = {
    books: [],
    searchResults: [],
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: true,
    query:''
  }


  componentDidMount() {
    BooksAPI.getAll().then((response) => {
      this.setState((state) => ({
        books: state.books.concat(response)
      }));
    })
  }


  updateQuery = (query) => {
    if (query.trim() === '') return;

    BooksAPI.search(query, 20).then(searchResults => {
      // catch `undefined` and `{error: ''}`
      if (!searchResults || searchResults.error) {
        this.setState({ searchResults: [] });
        return;
      }

      const reconciledSearchResults = searchResults.map(searchResult => {
        searchResult.shelf = 'none';
        this.state.books.forEach(book => {
          if(book.id === searchResult.id) searchResult.shelf = book.shelf;
        })
        return searchResult;
      })

      this.setState(state => ({ searchResults: reconciledSearchResults }));
    });
  };


  clearQuery = () => {
  this.setState({ query: '' })
  }

  changeShelf = (value, book) => {
    let newBooks = Object.assign([], this.state.books)
    newBooks.filter((b) => b.id === book.id)[0].shelf = value
    this.setState((state) => ({
      books: newBooks
    }))
    BooksAPI.update(book, value)
  }

  addToMyReads = (value, book) => {
    let newBooks = Object.assign([], this.state.searchResults)
    newBooks.filter((b) => b.id === book.id)[0].shelf = value
    this.setState((state) => ({
      books: state.books.concat(newBooks)
    }))
    BooksAPI.update(book, value)
  }

showMainPage = () => {
  this.setState({ showSearchPage: false })
  this.setState({ searchResults: [] })
}

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <Search books={this.state.books} searchResults={this.state.searchResults} toMainPage={this.showMainPage} moveBook={this.changeShelf} updateSearch={this.updateQuery} addBook={this.addToMyReads} clearSearch={this.clearQuery} shelf="none"/>

        ) : (

          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>

            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                                <Book books={this.state.books} moveBook={this.changeShelf} shelf='currentlyReading'/>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <Book books={this.state.books} moveBook={this.changeShelf} shelf='wantToRead'/>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <Book books={this.state.books} moveBook={this.changeShelf} shelf='read'/>
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
