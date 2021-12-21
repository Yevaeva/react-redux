import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Feature = () => {
  const { authenticated } = useSelector((state) => state.auth);
  let navigate = useNavigate();
  useEffect(() => {
    if (!authenticated) {
      navigate("/");
    }
  }, [authenticated, navigate]);
  return <div>Feature</div>;
};

export default Feature;
