import React from 'react';
import Book from './Book';
const ListBooks = (props) =>
{
    return (
        <div className="bookshelf">
                  <h2 className="bookshelf-title">{props.ListType}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {props.books.filter((book) => book.shelf===props.ListType).map((book) => 
                        <li key={book.id}>
                        <Book book={book} refreshBooks={props.refreshBooks}/>
                      </li>
                    )}
                    </ol>
                  </div>
                </div>
    )
}

export default ListBooks