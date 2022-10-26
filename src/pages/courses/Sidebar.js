import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Sidebar = () => {
    const courses = useLoaderData();
    return (
        <div>
            {
                courses.map(course => <Link to={`/courses/${course.id}`} key={course.id}><p>{course.name}</p></Link>)
            }
        </div>
    );
};

export default Sidebar;