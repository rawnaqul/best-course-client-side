import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/home/Home";
import Faq from "../../pages/faq/Faq";
import Blog from "../../pages/blogs/Blog";
import Allcourses from "../../pages/courses/Allcourses";

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
                element: <Allcourses></Allcourses>,
            },
        ]
    }
])