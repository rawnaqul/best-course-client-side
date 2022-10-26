import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Courses = () => {
    const courses = useLoaderData();

    return (
        <div className='grid grid-cols-3'>
            {
                courses.map(course => <div key={course.id} className="card w-96 glass">
                    <figure><img src={course.img} alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Life hack</h2>
                        <p>How to park your car at your garage?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Learn now!</button>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Courses;