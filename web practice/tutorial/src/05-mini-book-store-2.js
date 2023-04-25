import React from 'react';
import ReactDOM from 'react-dom';

// CSS
import './index.css';

// setup variables
const author = 'Jimmy Fallon';
const title = 'Nana Loves you more';
const img = 'https://images-na.ssl-images-amazon.com/images/I/816Li6IWaAS._AC_UL906_SR906,600_.jpg';


// Nested Components and Tools
function Booklist() {
  return (
    <section className='booklist'>
      <Book />
    </section>
  )
}

const Book = () => {
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

