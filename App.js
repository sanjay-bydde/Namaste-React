import React from "react";
import ReactDOM from "react-dom/client";
        
        
const number = 1000000;
const Title = () =>(
    <h1>This is React Title</h1>
);
const FunctionalComponent = () => (
    <div id="container">
        {number}
        <Title/>
        <h1>Hi React</h1>
    </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FunctionalComponent />);
