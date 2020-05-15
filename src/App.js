import React from 'react'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
import './App.css'
import Search from './Search'
import {Route,Link} from 'react-router-dom'
class BooksApp extends React.Component {
  state = {
    books:[]
  }
  GetBooks = (book,shelf) => 
  {
    if(book && shelf)
    {
      let books=this.state.books;
      books.forEach((oldBook) =>
      {
        if(book.id === oldBook.id)
        {
          oldBook.shelf=shelf
        }
      })
      this.setState({
        books
      })
    }
    else {
    BooksAPI.getAll().then((books) =>
    {
     this.setState({
       books
     })
    })
  }
  }
  componentDidMount ()
  {
    this.GetBooks()
  }
  render() {
    return (
      <div className="app">
      <Route path='/search' 
      render={() => 
        (
          <Search refreshBooks={() => this.GetBooks()}/>
        )}
       />
        <Route exact path='/'>
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
               <ListBooks books={this.state.books} ListType={"currentlyReading"} refreshBooks={() => this.GetBooks()}/>
               <ListBooks books={this.state.books} ListType={"wantToRead"} refreshBooks={() => this.GetBooks()}/>
               <ListBooks books={this.state.books} ListType={"read"} refreshBooks={() => this.GetBooks()}/>
              </div>
            </div>
            <div className="open-search">
              <Link to='/search'><button>Add a book</button></Link>
            </div>
          </div>
          </Route>
      </div>
    )
  }
}

export default BooksApp
