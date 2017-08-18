import React, { Component } from 'react'

class ShelfChanger extends Component {
static defaultProps = {
  book: {shelf: "none"}
}
handleChange = (value, book) => {
  if (this.props.shelf === "none"){
    return this.props.addBook(value, book)
  }
  else{
    return this.props.moveBook(value, book)
  }
}
render(){
  console.log('shelf', this.props)
  return(
    <div className="book-shelf-changer">
      <select value={this.props.book.shelf} onChange={(event) => this.handleChange(event.target.value, this.props.book)}>
        <option value="none" disabled>Move to...</option>
        <option value="none">None</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
      </select>
    </div>
  )
}
}

export default ShelfChanger
