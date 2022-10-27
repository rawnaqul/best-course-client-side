import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Courses from './Courses';
import Sidebar from './Sidebar';
import { useRef } from 'react';
import ReactPrint from 'react-to-print';

const CourseDetails = () => {
    const courseInfo = useLoaderData();

    const { name, price, details, img, duration, mentor, id } = courseInfo;

    const ref = useRef();

    return (
        <div className='rounded-md'>
            <div ref={ref} className="card lg:card-side bg-base-100 shadow-xl rounded-md">
                <figure><img src={img} alt="Album" /></figure>
                <div className="card-body">
                    <div>
                        <h1 className="card-title place-content-center text-3xl">{name}</h1>
                    </div>
                    <p className='font-medium m-2'>{details}</p>
                    <text>Created By: Sir. <a className='underline hover:decoration-dashed text-lime-600'>{mentor}</a></text>
                    <p className="text-sm p-0 m-0">Course Duration: {duration}</p>
                    <p className="subpixel-antialiased">Course Price: {price}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/checkout/${id}`}><button className="btn btn-primary">Purchase</button></Link>
                    </div>
                </div>
            </div>
            <div className='my-3'>
                <p>Download details about this course here</p>
                <ReactPrint trigger={() => <button className="btn btn-outline btn-accent btn-xs mt-3">DOWNLOAD PDF</button>} content={() => ref.current} />
            </div>
        </div>
    );
};

export default CourseDetails;