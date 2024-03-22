import React from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
const Header = () => {
  let NavigateTo = useNavigate();
  let user = localStorage.getItem("user-info");
  function logout() {
    localStorage.clear();
    NavigateTo("/Login");
  }
  return (
    <section className="header-wrapper">
      <div className="flexCenter paddings innerWidth header-container">
        <div className="logo-container">
          <Link to="/">
            Next<span>Home</span>
          </Link>
        </div>

        <ul className=" flexCenter header-menu">
          <li className="dropdown">
            <a href="">Buy</a>
            <div className="dropdown-content">
              <ul>
                <li>
                  <a href="">Home for sale</a>
                </li>
                <li>
                  <a href="">New Construction for sale</a>
                </li>
                <li>
                  <a href="">Home values</a>
                </li>
              </ul>
            </div>
          </li>
          <li className="dropdown">
            <a href="">Rent</a>
            <div className="dropdown-content">
              <ul>
                <li>
                  <a href="">Home for rent</a>
                </li>
                <li>
                  <a href="">New Construction for rent</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="">Sell</a>
          </li>
          <li>
            <a href="">Home Loans</a>
          </li>
          <li>
            <a href="">Agent Finder</a>
          </li>
          <li>
            <a href="">Help</a>
          </li>

          {/* {localStorage.setItem("user-info", "keyyy")} */}
          {localStorage.getItem("user-info") ? (
            <>
              <li className="dropdown">
                <a href="">{user}</a>
                <div className="dropdown-content">
                  <ul>
                    <li>
                      <a href="" onClick={logout}>
                        Logout
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </>
          ) : (
            <>
              <Link to="/Login">
                <button className="button">Login</button>
              </Link>
            </>
          )}
        </ul>
      </div>
    </section>
  );
};
export default Header;
