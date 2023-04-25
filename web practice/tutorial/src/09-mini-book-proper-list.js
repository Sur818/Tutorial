import React from 'react';
import ReactDOM from 'react-dom';

// CSS
import './index.css';

// setup variables
const books = [
    {
      img: 'https://images-na.ssl-images-amazon.com/images/I/816Li6IWaAS._AC_UL906_SR906,600_.jpg', 
      title: 'Nana Loves you more', 
      author: 'Jimmy Fallon'
    }, 
    {
      img: 'https://images-na.ssl-images-amazon.com/images/I/610QYM5NxRL._AC_UL906_SR906,600_.jpg', 
      title: 'Verity', 
      author: 'Collen Hoover'
    }
];



function Booklist() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        const {img, title, author} = book;
        return (
          <Book book={book}></Book>
        );
      })}
    </section>
  )
}

const Book = (props) => {
  const {img, title, author} = props.book;
  return (
  <article className='book'>
    <img src={img} alt='' height="200" width="300"/>
    <h1>{title}</h1>
    <h4>{author}</h4>
  </article>
  )
}

ReactDOM.render(
  <Booklist/>, 
  document.getElementById("root")
);

