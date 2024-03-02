import { Outlet } from "react-router-dom";
import Header from "./common/header";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { verify } from "./pages/auth/authSlice";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(verify());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Outlet />
      <ToastContainer />
    </>
  );
}

export default App;
