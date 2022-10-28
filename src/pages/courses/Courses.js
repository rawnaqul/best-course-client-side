import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Courses = () => {
    const courses = useLoaderData();

    return (
        <div className='grid lg:grid-cols-2 rounded-md'>
            {
                courses.map(course => <div key={course.id} className="card w-96 glass rounded-md m-3">
                    <figure><img src={course.img} alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{course.name}</h2>
                        <p className='text-sm pr-0 text-left'>{course.details}</p>
                        <div className="card-actions justify-end">
                            <Link to={`/courses/${course.id}`} key={course.id}><button className="btn btn-primary">Learn now!</button></Link>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Courses;