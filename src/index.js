// import ReactDOM from "react-dom"
// import App from "./App"
// import "./index.css"
// ReactDOM.render(<App/>,document.querySelector("#root"))


import { createRoot } from "react-dom/client"; // Update the import statement
import App from "./App";
import "./index.css";

createRoot(document.querySelector("#root")).render(<App />);
