import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/Login/Login";
import Users from "./pages/Users/Users";
import "./App.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login type="login" />,
    },
    {
      path: "/register",
      element: <Login type="register" />,
    },
    {
      path: "/users",
      element: <Users />,
    },
    {
      path: "/",
      element: <Navigate to="/register" />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
