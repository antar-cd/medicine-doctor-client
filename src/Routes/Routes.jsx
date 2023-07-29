import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import About from "../Pages/Home/Home/About";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Signup/SignUp";
import BookService from "../Pages/Booking/BookService";
import Booking from "../Pages/Booking/Booking";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/about',
            element: <About></About>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'signup',
          element: <SignUp></SignUp>
        },
        {
          path: 'book/:id', 
          element: <BookService></BookService> ,
          loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path: 'bookings',
          element: <PrivateRoute><Booking></Booking></PrivateRoute>
        }
        
      ]
    },
  ]);


  export default router;