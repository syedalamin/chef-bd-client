import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";

import Chef from "../pages/Chef/Chef";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/chef/:id',
                element: <Chef></Chef>,
                loader: ({params}) => fetch(`http://localhost:5000/chef/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element: <Register></Register>
            }
            
        ]
    },
    
])

export default router;