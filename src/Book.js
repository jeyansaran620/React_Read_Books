import React, { Component} from 'react';
import * as BooksAPI from './BooksAPI';
import PropTypes from 'prop-types';

class Book extends Component 
{
    static propTypes = {
        book: PropTypes.array.isRequired,
        refreshBooks : PropTypes.func.isRequired
    }
    state = {
        shelf:'none'
    }
    handleSelfClick =(shelf) =>
    {
        this.setState({
            shelf
        })
        BooksAPI.update({id:this.props.book.id},shelf)
        this.props.refreshBooks()
    }
    componentDidMount =() =>
    {
        if(this.props.book.shelf)
        {
            this.handleSelfClick(this.props.book.shelf)
        }

    }
    render()
    {
        const {book} =this.props
        return (
            <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193,backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : 'none' })` }}></div>
                            <div className="book-shelf-changer">
                              <select value={this.state.shelf} onChange={(e) => this.handleSelfClick(e.target.value)}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{book.title}</div>
                          {book.authors && book.authors.map((author,i) =>
                            <div key={i} className="book-authors">{author}</div>
                            )}
                        </div>
        )
    }
}

export default Book