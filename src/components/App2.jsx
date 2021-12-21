import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, Link } from "react-router-dom";
import { changeAuth } from "../actions";
import CommentBox from "./CommentBox";
import CommentList from "./CommentList";

function App() {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  const renderButton = () => {
    if (auth)
      return (
        <button onClick={() => dispatch(changeAuth(false))}>SIGN OUT</button>
      );
    else {
      return (
        <button onClick={() => dispatch(changeAuth(true))}>SIGN IN</button>
      );
    }
  };
  const renderHeader = () => {
    return (
      <>
        <div>
          <Link to="/">HOMEPAGE</Link>
        </div>
        <div>
          <Link to="/post">CommentBox</Link>
        </div>
        <div>{renderButton()}</div>
      </>
    );
  };
  return (
    <div className="App">
      {renderHeader()}
      <Routes>
        <Route path="/post" element={<CommentBox />}></Route>
        <Route path="/" element={<CommentList />}></Route>
      </Routes>
    </div>
  );
}

export default App;
