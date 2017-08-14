import React, { Component } from 'react'

class ShelfChanger extends Component {

render(){
  return(
    <div className="book-shelf-changer">
      <select value={this.props.book.shelf} onChange={(event) => this.props.moveBook(event.target.value, this.props.book)}>
        <option value="none" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  )
}
}

export default ShelfChanger
