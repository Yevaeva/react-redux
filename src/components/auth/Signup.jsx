import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { reduxForm, Field } from "redux-form";
import { signup } from "../../actions";

const Signup = ({ handleSubmit }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { errorMessage } = useSelector((state) => state.auth);
  const onSubmit = (formProps) => {
    dispatch(
      signup(formProps, () => {
        navigate("/feature");
      })
    );
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <label>Email</label>
          <Field
            name="email"
            type="text"
            component="input"
            autoComplete="none"
          />
        </fieldset>
        <fieldset>
          <label>Password</label>
          <Field
            name="password"
            type="password"
            component="input"
            autoComplete="none"
          />
        </fieldset>
        <div>{errorMessage}</div>
        <button>Sign Up</button>
      </form>
    </div>
  );
};

export default reduxForm({ form: "signup" })(Signup);
