import React, { Component } from "react";
import logo from "./logo-2.svg";
import "./App.css";

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
            <div className="search-container f-auto p-wrap">
              <label className="search-label">
                <input type="search" placeholder="Search" />
              </label>
            </div>
            <ul className="nav-wrapper d-flex">
              <li className="nav-item">
                <a className="nav-link active-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Following
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Sign up
                </a>
              </li>
            </ul>
          </div>
        </header>
        <section className="page-highlight" />
        <div className="page-notice">
          <div className="container">
            <div className="notice-content p-wrap c-content">
              <span className="page-title">공지사항</span>
              <div className="notice-title">
                [서울시립대학교 스마트창작터 X 비긴메이트] 스타트업 팀빌딩
                네트워킹 행사 참가기업 모집 공고
              </div>
              <div className="notice-subtitle">
                오프라인 행사에서 팀원과 파트너사를 찾아보세요!
              </div>
              <span className="btn-more">MORE</span>
            </div>
          </div>
        </div>
        <main className="page-content">
          <div className="p-section">
            <div className="container">
              <div className="grid">
                <div className="grid-item">
                  <a className="aspect-ratio" href="#">
                    <img
                      src="https://cdn.dribbble.com/users/78806/screenshots/1255309/attachments/171257/Dribbble_Profile_Redesign_Final.jpg"
                      alt=""
                    />
                    <div className="item-overlay">
                      <span className="btn-view">View</span>
                    </div>
                  </a>
                  <div className="grid-content">
                    <div className="grid-header">
                      <a href="#">Commercial Illustration for BMW MINI 2019</a>
                    </div>
                    <div className="grid-captions">
                      <span className="user-post">by Sori Kim</span>
                      <span className="icon-views" />
                      <span className="num-views">3</span>
                      <span className="icon-comments" />
                      <span className="num-comments">1</span>
                    </div>
                    <div className="grid-footer">
                      <a href="#" className="field">
                        Architecture
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid-item">
                  <a className="aspect-ratio" href="#">
                    <img
                      src="https://picsum.photos/600/400?image=1015"
                      alt=""
                    />
                    <div className="item-overlay">
                      <span className="btn-view">View</span>
                    </div>
                  </a>
                  <div className="grid-content">
                    <span className="grid-header">
                      <a href="#">Ocean Surf</a>
                    </span>
                    <div className="grid-captions">
                      <span className="user-post">by Veronic Lazarian</span>
                      <span className="icon-views" />
                      <span className="num-views">3</span>
                      <span className="icon-comments" />
                      <span className="num-comments">1</span>
                    </div>
                    <div className="grid-footer">
                      <a href="#" className="field">
                        Architecture
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
