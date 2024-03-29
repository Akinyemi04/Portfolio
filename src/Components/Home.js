import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { contact } from "./store";
import ScrollToTop from "./ScrollToTop";

const Home = () => {
  const Dispatch = useDispatch();
  function open() {
    Dispatch(contact.about());
  }
  return (
    <div className="home">
      <ScrollToTop />
      <main>
        <h1>Akinyemi Gabriel</h1>
        <p>
          <span>Bringing</span>
          <span>your</span>
          <span>digital</span>
          <span>vision</span>
          <span>to</span>
          <span>life</span>
          <span>one</span>
          <span>pixel</span>
          <span>at</span>
          <span>a</span>
          <span>time</span>
        </p>
        <NavLink to="/about" onClick={open} className="about-me">
          {" "}
          About me
        </NavLink>
      </main>
    </div>
  );
};

export default Home;
