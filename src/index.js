import React from "react";
import ReactDOM from "react-dom";

function trick() {
  const element = (
    <div>
      <h1>Hello World First Render!</h1>
      <h2>It is {new Date().toLocaleTimeString()}</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById("root"));
}
setInterval(trick, 1000);
