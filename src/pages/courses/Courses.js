import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Courses = () => {
    const courses = useLoaderData();
    console.log(courses);
    return (
        <div>
            <h2>Course Card{courses.length}</h2>
        </div>
    );
};

export default Courses;