import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Blog from "../pages/Blog/Blog";
import Chef from "../pages/Chef/Chef";

import Detail from "../pages/Detail/Detail";
import Details from "../layout/DetailsLayout";

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
            
        ]
    },
    // {
    //     path: '/details',
    //     element: <Details></Details>,
    //     children: [
    //         {
    //             path: ':id',
    //             element: <Detail></Detail>
    //         },
    //     ]
    // },
])

export default router;