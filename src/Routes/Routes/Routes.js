import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Category from "../../Pages/Category/Category/Category";
import Courses from "../../Pages/Courses/Courses";
import FAQ from "../../Pages/FAQ/FAQ";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import Course from "../../Pages/Pages/Course/Course";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://b610-lerning-platform-server-side-zarrin-tasnim.vercel.app/course ')
            },
            {
                path: '/courses',
                element: <Course></Course>,
                loader: () => fetch('https://b610-lerning-platform-server-side-zarrin-tasnim.vercel.app/')
            },
            {
                path: '/blog',
                element: <Blog></Blog>,
                loader: () => fetch('https://b610-lerning-platform-server-side-zarrin-tasnim.vercel.app/')
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>,
                loader: () => fetch('https://b610-lerning-platform-server-side-zarrin-tasnim.vercel.app/')
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`https://b610-lerning-platform-server-side-zarrin-tasnim.vercel.app/category-course/${params.id}`)
            },
            {
                path: '/course/:id',
                element: <PrivateRoute><Courses></Courses></PrivateRoute>,
                loader: ({ params }) => fetch(`https://b610-lerning-platform-server-side-zarrin-tasnim.vercel.app/course/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            { path: '*', element: <div> Page not foundd</div> }
        ]
    }
])