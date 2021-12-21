import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import reducers from "./reducers";
import async from "./middlewares/async";
import stateValidator from "./middlewares/stateValidator";
import thunk from "redux-thunk";

const Root = ({
  children,
  initialState = { auth: { authenticated: localStorage.getItem("token") } },
}) => {
  const store = createStore(reducers, initialState, applyMiddleware(thunk));
  return <Provider store={store}>{children}</Provider>;
};
export default Root;
