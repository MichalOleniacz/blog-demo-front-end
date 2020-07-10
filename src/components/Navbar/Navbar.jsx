import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.wrapper}>
      <Link path="/new">
        <h1 className={styles.navLink}>Add a new annonymous post!</h1>
      </Link>
    </div>
  );
};

export default Navbar;
