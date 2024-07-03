import React from "react";
import classes from "./Topbar.module.css";
const Topbar = () => {
  return (
    <nav className={classes.topBar}>
      <img
        alt=""
        src="https://upload.wikimedia.org/wikipedia/donate/thumb/f/fd/Amazon-logo-white.svg/1024px-Amazon-logo-white.svg.png"
      ></img>
    </nav>
  );
};
export default Topbar;
