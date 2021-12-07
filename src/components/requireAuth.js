import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router";

const ChildComponent = () => {
  const ComposedComponent = (props) => {
    const { auth } = useSelector((state) => state);
    let navigate = useNavigate();
    // componentDidMount() {
    //     console.log("ypu must logged in");
    // }
    // componentDidUpdate() {
    // if (!auth)console.log("ypu must logged in");

    // }
    useEffect(() => {
      if (!auth) {
        console.log("ypu must logged in");
        Navigate("/");
      }
    }, [auth, navigate]);

    return <ChildComponent {...props} />;
  };
  return <ComposedComponent />;
};

export default ChildComponent;
