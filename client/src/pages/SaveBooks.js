import React, { Component } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import { Container } from "../components/Grid";
import SavedResult from "../components/SavedResult"

class SaveBooks extends Component {
  state = {
    savedBooks: []
  };


  componentDidMount = () => {
    this.getBooks()
}

deleteGoogleBook = currentBook => {
    API.deleteBook( currentBook.id )
    .then(res => {
        console.log("You deleted this book:", res);
        this.getBooks();
    })
    .catch(err => {
        console.log("This is the error", err);
    })
}

getBooks = () => {
    API.getBooks()
    .then(res => {
        this.setState({
            savedBooks: res.data
        })
        console.log("This is the res from getBooks", res);
    })
    .catch(err => {
        console.log("This is the error", err);
    })
}

  render() {
    return (
      <Container fluid className="container">
        <Jumbotron>
          <h1 className="text-white">Your Favorite Books</h1>
        </Jumbotron>
        <Container>
          <SavedResult savedBooks={this.state.savedBooks} handleDeleteButton={this.handleDeleteButton} />
        </Container>
      </Container>
    )
  }
}



export default SaveBooks;