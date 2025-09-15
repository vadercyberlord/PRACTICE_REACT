import React from "react";
import ReactDOM from "react-dom/client";

function AppLayout() {
  return <h1>Hello, React + Parcel!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
