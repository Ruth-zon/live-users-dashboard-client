import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Login from './pages/Login'
import './App.css';

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
      path: '/users',
      element: <div>users!!</div>
    },
    {
      path: '/',
      element: <Navigate to="/register" />
    }


  ],
  );
  return (
    <RouterProvider router={router} />
  );
}

export default App;
