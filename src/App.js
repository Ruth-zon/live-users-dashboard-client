import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/Login/Login";
import Users, { usersLoader } from "./pages/Users/Users";
import "./App.css";
import useCookie from "./utils/useCookie";

function App() {
  const [token] = useCookie("access_token");
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
      loader: () => usersLoader(token),
    },
    {
      path: "/",
      element: <Navigate to="/register" />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
