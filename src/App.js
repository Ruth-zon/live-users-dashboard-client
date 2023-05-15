import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Login from './pages/Login/Login';
import Users, {usersLoader} from './pages/Users/Users';
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
      element: <Users />,
      loader: () => usersLoader(readCookie('access_token')),
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

const readCookie = (name) => {
  const cookies = document.cookie.split(';')
  let formCookie = "";
  cookies.forEach((cookie) => {
    if(cookie.startsWith(name)){
       formCookie = cookie.replace(`${name}=`,"");
    }
  })
  return formCookie;
}

export default App;
