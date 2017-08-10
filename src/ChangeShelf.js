import React, { Component } from 'react'

class ChangeShelf extends Component {
shelfChange = (value) => {
  //this.props.setState({shelf: value})
  console.log(value)
}
  render(){
    return(
      <div className="book-shelf-changer">
        <select onChange={(event) => this.shelfChange(event.target.value)}>
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

export default ChangeShelf
