import React, { Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import * as BooksAPI from './BooksAPI';
import Book from './Book';

class Search extends Component
{
  static propTypes = {
    refreshBooks : PropTypes.func.isRequired
}
    state ={
        query:'',
        books:[]
    }
    handleQuery = (query) =>
    {
        this.setState({
            query
        })
        if(query.length === 0) {
            this.setState({query, books: []})
        }
       else if(query.length>0)
        {
        BooksAPI.search(query,20).then(books => {
            if(!books.error){
                this.setState({books})
            }
            else
            {
                this.setState({ books: []})
            }
   })
}
        
    }
    
    render()
    {
        return (
            <div className="search-books">
            <div className="search-books-bar">
              <Link to='/' className="close-search">Close</Link>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" 
                value={this.state.query}
                onChange={(e) => this.handleQuery(e.target.value)}/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
              {this.state.books.length>0 ? 
              this.state.books.map((book) =>
              <li key={book.id}>
              <Book book={book} refreshBooks={this.props.refreshBooks}/>      
                      </li>
              ) : this.state.query !== '' ? <p>No Result found for this search.</p> : <p>Search a keyword.</p> 
            }
              </ol>
            </div>
          </div>
        )
    }
}

export default Search