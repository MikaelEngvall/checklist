import React from "react";
import ReactDOM from "react-dom";

function App() {
  return (
    <div>
      <h1>Hello React</h1>
    </div>
  );
}
// React v18

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
