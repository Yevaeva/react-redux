import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, Link } from "react-router-dom";
import { changeAuth } from "../actions";
import CommentBox from "./CommentBox";
import CommentList from "./CommentList";
import Header from "./Header";

function App({ children }) {
  return (
    <div className="App">
      <Header />
      {children}
    </div>
  );
}

export default App;
