import React from 'react';
import ReactDOM from 'react-dom';

// CSS
import './index.css';

// setup variables
const firstBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/816Li6IWaAS._AC_UL906_SR906,600_.jpg', 
  title: 'Nana Loves you more', 
  author: 'Jimmy Fallon'
};

const secondBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/610QYM5NxRL._AC_UL906_SR906,600_.jpg', 
  title: 'Verity', 
  author: 'Collen Hoover'
};


// Nested Components and Tools
function Booklist() {
  return (
    <section className='booklist'>
      <Book img={firstBook.img} title={firstBook.title} author={firstBook.author}/>
      <Book img={secondBook.img} title={secondBook.title} author={secondBook.author}/>
    </section>
  )
}

const Book = ({img, title, author}) => {

  // props destructuring
  // const { img, title, author } = props;

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

