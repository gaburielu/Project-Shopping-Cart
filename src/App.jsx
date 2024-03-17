import "./styles/main.css";

import { useState } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./components/navbar";
import { Wave } from "./components/minor";

function App({products}) {
  const [test, setTest] = useState("foo bar");

  return (
    <div id="homepage">
      <header>
        <h1>
        𝓖𝓐𝓜𝓔 &nbsp; &nbsp; 𝓞𝓝 &nbsp; &nbsp; &nbsp;<span>®</span>
        </h1>
        <Navbar products={products}/>
        <a className="signup-link" href="">
          SIGN UP
        </a>
      </header>
      <div id="main">
        <Wave />
        <Outlet test={test} />
      </div>
    </div>
  );
}

export default App;
