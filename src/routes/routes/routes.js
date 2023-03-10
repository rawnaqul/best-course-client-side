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
import Courses from "../../pages/courses/Courses";
import Checkout from "../../pages/checkout/Checkout";
import PrivateRoutes from "../privateRoutes/PrivateRoutes";

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
                    return fetch('https://sera-course-server.vercel.app/mycourses')
                },
                element: <Allcourses></Allcourses>,
                children: ([
                    {
                        path: "/courses",
                        loader: async () => {
                            return fetch('https://sera-course-server.vercel.app/mycourses')
                        },
                        element: <Courses></Courses>
                    },
                    {
                        path: '/courses/:id',
                        loader: async ({ params }) => {
                            return fetch(`https://sera-course-server.vercel.app/mycourses/${params.id}`)
                        },
                        element: <CourseDetails></CourseDetails>
                    },
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
            {
                path: "/checkout/:id",
                loader: async ({ params }) => {
                    return fetch(`https://sera-course-server.vercel.app/mycourses/${params.id}`)
                },
                element: <PrivateRoutes>
                    <Checkout></Checkout>
                </PrivateRoutes>,
            },
            {
                path: '*',
                element: <div className="text-8xl mt-10 text-red-700">404: You've come to wrong place mate!</div>
            }
        ]
    }
])