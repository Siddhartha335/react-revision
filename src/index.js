// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// import "./index.css";


// ReactDOM.render(
//   <>
//     <div>
//       <App />
//     </div>
//   </>,
//   document.getElementById("root")
// )

// import React from "react";
// import ReactDOM from "react-dom";
// import * as sid from "./App";

// ReactDOM.render(
//   <>
//     <ol>
//       <li>Raut</li>
//       <li>{ sid.default}</li>
//       <li>{ sid.favProg}</li>
//       <li>{ sid.myName()}</li>
//     </ol>
//   </>,
//   document.getElementById("root")
// )

// import React from "react";
// import ReactDOM from "react-dom";
// import * as math from "./App";

// ReactDOM.render(
//   <>
//     <ul>
//           <li>Sum of two number is:{math.default(40,4)}</li>
//           <li>Subtract of two number is:{math.sub(30,3)}</li>
//           <li>Multiply of two number is:{math.mul(10,3)}</li>
//           <li>Divide of two number is:{math.div(10,3)}</li>
//     </ul>
//   </>,
//   document.getElementById("root")
// )
import React from "react";
import ReactDOM from "react-dom"
import App from "./App";
import movies from "./movies";


ReactDOM.render(
  <>
   <div className="heading">
   <h1>My top <span>5</span> all time best shows</h1>
   </div>
    {movies.map( (value) => {
  return (
    <App 
      name={value.name}
      link={value.url}
      imgurl={value.imgUrl}
    />
  )
})}
  </>,
  document.getElementById("root")
)