INSTALLATION:
The application was created with "create-react-app" and requires only "npm install" and npm start to get it installed and launched.

CODE EXPLANATION:
 
  App.js:
    This component is the main component that takes care of the the content to be rendered.
    State: It has all the books fetched using the BOOKSAPI.
    This describes the Route of Search and ListBooks component.
    When the route is at search the Search component is rendered.
    When the route is at the main page(/) then the ListBooks component is rendered thrice with three different shelf values.
   
  Search.js:
    This component has the controlled search input maintaining the search of new Books.
    State:It has the query in the search box and the searchedBooks fetched by the API.
    When the input changes the query updates and fetch the book with the API.
    If searchedBooks is not empty then map with the Books Component.
   
  ListBooks.js:
    This component checks for the Books in the shelf(prop) and calls the Book component.
   
  Book.js:
    This Component renders the information about the book and has the input option to update the shelf.
    When the input changes the shelf updates with the new value using the API and rerenders the App component.
