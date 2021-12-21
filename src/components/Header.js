import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const { authenticated } = useSelector((state) => state.auth);
  const renderLinks = () => {
    if (authenticated) {
      return (
        <div>
          <Link to="/signout">Signout</Link>
          <Link to="/feature">Feature</Link>
        </div>
      );
    } else {
      return (
        <div>
          <Link to="/signup">Signup</Link>
          <Link to="/signin">Signin</Link>
        </div>
      );
    }
  };
  return (
    <div>
      <Link to="/">Redux Auth</Link>
      {renderLinks()}
    </div>
  );
};

export default Header;
