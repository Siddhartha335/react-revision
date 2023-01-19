// import React from "react";
// import Heading from "./Heading";

// function App() {
//     return <Heading />
// }

// export default App;


// const youtuber = "Siddhartha Raut";
// const favProg = "React"

// function myName() {
//     let name;
//     return name="Sid";
// }

// export default youtuber;
// export {favProg,myName};

// function add(a,b) {
//     return a+b;
// }

// function sub(a,b) {
//     return a-b;
// }

// function mul(a,b) {
//     return a*b;
// }

// function div(a,b) {
//     let calc =a/b;
//     calc=calc.toFixed(2);
//     return calc;
// }

// export default add;
// export {sub,mul,div};



import React from "react";
import "./index.css"

function App(props) {
   return (
    <>
        <div className="cards">
            <div className="img_cards">
                <img src={props.imgurl} alt="movies image" />
            </div>
            <div className="intro">
                <h2>A Fmovies Original Series</h2>
                <h3>{props.name}</h3>
                <button><a href={props.link}target="_blank">Watch Now</a></button>
            </div>
        </div>
    </>
   )
}

export default App;