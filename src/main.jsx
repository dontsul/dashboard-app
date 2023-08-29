import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./layout/Layout";
import { Login } from "./pages/login/Login";
import { Registration } from "./pages/registration/Registration";
import { ErrorPage } from "./pages/errorPage/ErrorPage";
import { Root } from "./Root";
import { store } from "./app/store.js";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { Dashboard } from "./components/dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/app",
        element: <Layout />,
        children: [
          {
            path: "/app/dashboard",
            element: <Dashboard />,
          },
          {
            path: "/app/cards",
            element: <div>cards</div>,
          },
          {
            path: "/app/product",
            element: <div>product</div>,
          },
          {
            path: "/app/wear-tear",
            element: <div>wear-tear</div>,
          },
          {
            path: "/app/games",
            element: <div>games</div>,
          },
          {
            path: "/app/settings",
            element: <div>settings</div>,
          },
        ],
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </ThemeProvider>
);
