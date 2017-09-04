import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './Search.js'
import Main from './Main.js'

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
    query:''
  };

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
      };

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
  };

  updateShelf = (value, currentBook) => {
  BooksAPI.update(currentBook, value).then(() => this.setState(state => {
    return {
      books: state.books.map(book => {
        if (book.id === currentBook.id) {
          book.shelf = value
        }
        return book
      }),
      searchResults: state.searchResults.map(book => {
        if (book.id === currentBook.id) {
          book.shelf = value
        }
        return book
      })
    }
  }));
};


  render() {
    return (
      <div className="app">
        <Route exact path="/" render={ () => (
              <Main books={this.state.books} moveBook={this.updateShelf} />
        )}/>
          <Route path="/search" render={({ history }) => (
            <Search
            books={this.state.books}
            searchResults={this.state.searchResults}
            moveBook={this.updateShelf}
            updateSearch={this.updateQuery}
            addBook={this.updateShelf}
            clearSearch={this.clearQuery}
            shelf="none"
            />
        )}/>
      </div>
    )
  };
};

export default BooksApp
