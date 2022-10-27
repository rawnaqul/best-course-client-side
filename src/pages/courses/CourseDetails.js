import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Courses from './Courses';
import Sidebar from './Sidebar';

const CourseDetails = () => {
    const courseInfo = useLoaderData();

    const { name, price, details, img, duration, mentor } = courseInfo;

    return (
        <div className='rounded-md'>
            <div className="card lg:card-side bg-base-100 shadow-xl rounded-md">
                <figure><img src={img} alt="Album" /></figure>
                <div className="card-body">
                    <h1 className="card-title place-content-center text-3xl">{name}</h1>
                    <p className='font-medium m-2'>{details}</p>
                    <text>Created By: Sir. <a className='underline hover:decoration-dashed text-lime-600'>{mentor}</a></text>
                    <p className="text-sm p-0 m-0">Course Duration: {duration}</p>
                    <p className="subpixel-antialiased">Course Price: {price}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Purchase</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;