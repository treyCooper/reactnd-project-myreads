import React, { Component } from 'react'
import Book from './Book.js'

class Bookshelf extends Component{

render(){
  return(
    <div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelfName}</h2>
          <div className="bookshelf-books">
            <Book books={this.props.books} moveBook={this.props.moveBook} shelf={this.props.shelf}/>
          </div>
      </div>
    </div>
    )
    }
}
export default Bookshelf
