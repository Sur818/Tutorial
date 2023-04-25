import React from 'react';
import ReactDOM from 'react-dom';

// function Greeting() {
//   return <h1>Hello World</h1>
// }

// const Greeting = () => {
//   return React.createElement('h1', {}, 'hello world 2');
// }


// function Greeting() {
//   return (
//     <div>
//       <h1>Nested Hello World</h1>
//     </div>
//   )
// }

// const Greeting = () => {
//   return (
//     React.createElement(
//       'div', 
//       {}, 
//       React.createElement(
//         'h1', 
//         {}, 
//         'Nested hello World 2'
//       )
//     )
//   )
// }

// ReactDOM.render(
//   <Greeting/>, 
//   document.getElementById("root")
// );


// ----- OR -----

ReactDOM.render(
    <Greeting> </Greeting>, 
    document.getElementById("root")
  );
  
