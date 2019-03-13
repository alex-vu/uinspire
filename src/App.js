import React, { Component } from "react";
import logo from "./logo-2.svg";
import "./App.css";
import Bricks from "brick.js";

const sizes = [
  { columns: 2, gutter: 10 },
  { mq: "768px", columns: 3, gutter: 25 },
  { mq: "1024px", columns: 4, gutter: 50 }
];

// const brickInstance = Bricks({
//   container: ".grid",
//   packed: "data-packed",
//   position: false,
//   sizes: sizes
// });

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="header-wrap">
            <div className="App-logo">
              <a href="#">
                <img src={logo} alt="logo" />
              </a>
            </div>
            <div className="search-container f-auto">
              <label className="search-label">
                <input type="search" placeholder="Search" />
              </label>
            </div>
            <ul className="nav-wrapper d-flex">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Following
                </a>
              </li>
            </ul>
          </div>
        </header>
        <main className="page-content">
          <div className="container">
            <div className="grid" />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
