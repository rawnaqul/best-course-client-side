import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Sidebar = () => {
    const courses = useLoaderData();
    return (
        <div className='rounded-md '>
            {
                courses.map(course => <Link to={`/courses/${course.id}`} key={course.id}><div className='btn btn-xs sm:btn-sm sm:text-xs md:btn-md lg:btn-lg w-full  mt-3'>{course.name}</div></Link>)
            }

        </div>
    );
};

export default Sidebar;