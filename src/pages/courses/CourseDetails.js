import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Courses from './Courses';
import Sidebar from './Sidebar';

const CourseDetails = () => {
    const courseInfo = useLoaderData();

    const { name, price, edtails, image, duration } = courseInfo;

    return (
        <div>
            <p>{name}</p>
            <p>{price}</p>
        </div>
    );
};

export default CourseDetails;