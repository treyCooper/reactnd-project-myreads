import React, { Component } from 'react'

class ShelfChanger extends Component {
  shelfChange = (value) => {
    console.log('this from shelfchange', this.state);
  }
render(){
  return(
    <div className="book-shelf-changer">
      <select value={this.props.book.shelf} onChange={(event) => this.shelfChange(event.target.value)}>
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
