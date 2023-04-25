import React from 'react';
import ReactDOM from 'react-dom';

// CSS
import './index.css';

// Nested Components and Tools

function Booklist() {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return <article className='book'>
    <Image> </Image>
    <Title> </Title>
    <Author />
  </article>
}

const Image = () => <img src="https://images-na.ssl-images-amazon.com/images/I/816Li6IWaAS._AC_UL906_SR906,600_.jpg" alt="nana" height="200" width="300"/>

const Title = () => <h1>Nana Love you more</h1>

const Author = () => <h4 style={{color:'#617d98', fontSize: '0.75rem', marginTop: '0.25rem'}}>Jimmy Fallon</h4>

ReactDOM.render(
  <Booklist/>, 
  document.getElementById("root")
);

