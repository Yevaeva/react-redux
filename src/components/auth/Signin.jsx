import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { reduxForm, Field } from "redux-form";
import { signin } from "../../actions";

const Signin = ({ handleSubmit }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { errorMessage } = useSelector((state) => state.auth);
  const onSubmit = (formProps) => {
    dispatch(
      signin(formProps, () => {
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
        <button>Sign In</button>
      </form>
    </div>
  );
};

export default reduxForm({ form: "signin" })(Signin);
