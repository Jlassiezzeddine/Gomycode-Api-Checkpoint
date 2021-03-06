import React from "react";
import { useDispatch } from "react-redux";
import { filterByTerm } from "../../actions";
import "./Navigation.scss";
const Navigation = () => {
  const dispatch = useDispatch();
  return (
    <nav
      className="navbar is-spaced has-background-grey-darker"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <div className="navbar-item">
          <h2 className="title is-4 has-text-light">API Checkpoint</h2>
        </div>
      </div>
      <div
        role="button"
        className="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </div>
      <div className="navbar-end">
        <ul className="navbar-menu">
          <li className="navbar-item">
            <div className="field">
              <p className="control has-icons-left ">
                <input
                  className="input"
                  type="text"
                  placeholder="Search"
                  onChange={(e) => dispatch(filterByTerm(e.target.value))}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-search"></i>
                </span>
              </p>
            </div>
          </li>
          <li className="navbar-item">
            <span className="icon notification-btn">
              <i className="far fa-bell fa-lg has-text-light"></i>
            </span>
          </li>

          <li className="navbar-item">
            <div className="profile-btn">
              <img
                src="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1544&q=80"
                alt="profile"
              />
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
