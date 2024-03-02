import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./style";
import App from "./App";
import Home from "./pages/home";
// import Detail from "./pages/detail";
import Login from "./pages/auth/components/login";
import Signup from "./pages/auth/components/signup";
import Write from "./pages/write";
import Search from "./pages/search";
import ErrorPage from "./common/error";
import store from "./store";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const Detail = React.lazy(() => import("./pages/detail"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/detail/:id",
        element: <Detail />,
      },
      {
        path: "/write",
        element: <Write />,
      },
      {
        path: "/search",
        element: <Search />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Signup />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </Provider>
  </React.StrictMode>
);
