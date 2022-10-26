import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Courses from './Courses';
import Sidebar from './Sidebar';

const CourseDetails = () => {
    const courseInfo = useLoaderData();

    const { name, price, details, img, duration } = courseInfo;

    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={img} alt="Album" /></figure>
                <div className="card-body">
                    <h1 className="card-title">{name}</h1>
                    <p>{details}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Purchase</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;