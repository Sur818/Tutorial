import React from 'react';
import ReactDOM from 'react-dom';

// JSX Rules
// return single statement
// div / section / article or fragment
// use camelCase for html attributes
// className instead of class
// formatting

/*
  onclick => onClick
  class => className
*/

function Greeting() {
  return (
    <div className='prime'>
      <h3>Hello People</h3>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
      </ul>
      <img src="" alt="" />
      <input type="text" />
    </div>
  )
}


// put starting tag of the element in front of return, or use brackets, otherwise you'll get an error.
// function Greeting() {
//   return 
//   <h1>Hello World</h1>
// }

// function Greeting() {
//   return <h1>
//     Hello world
//   </h1>
// }

ReactDOM.render(
  <Greeting/>, 
  document.getElementById("root")
);

