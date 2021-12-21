import React from "react";
import { useDispatch } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { signup } from "../../actions";

const Signup = ({ handleSubmit }) => {
  const dispatch = useDispatch();
  const onSubmit = (formProps) => {
    // console.log(formProps);
    dispatch(signup(formProps));
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
        <button>Sign Up</button>
      </form>
    </div>
  );
};

export default reduxForm({ form: "signup" })(Signup);
