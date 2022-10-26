import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/home/Home";
import Faq from "../../pages/faq/Faq";
import Blog from "../../pages/blogs/Blog";
import Allcourses from "../../pages/courses/Allcourses";
import Login from "../../pages/login/Login";
import Signup from "../../pages/signup/Signup";
import Sidebar from "../../pages/courses/Sidebar";
import CourseDetails from "../../pages/courses/CourseDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/home",
                element: <Home></Home>,
            },
            {
                path: "/faq",
                element: <Faq></Faq>,
            },
            {
                path: "/blog",
                element: <Blog></Blog>,
            },
            {
                path: "/courses",
                loader: async () => {
                    return fetch('http://localhost:5000/mycourses')
                },
                element: <Allcourses></Allcourses>,
                children: ([
                    {
                        path: '/sidebar',
                        element: <Sidebar></Sidebar>

                    },
                    {
                        path: '/coursedetails',
                        loader: async ({ params }) => {
                            return fetch('http://localhost:5000/mycourses/${params.id}')
                        },
                        element: <CourseDetails></CourseDetails>
                    }
                ])

            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/signup",
                element: <Signup></Signup>,
            },
        ]
    }
])