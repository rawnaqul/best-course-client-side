import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const courseInfo = useLoaderData();

    const { name, price, details, img, duration, mentor } = courseInfo;
    return (
        <div className='mt-20'>
            <div className="card lg:card-side bg-base-100 shadow-xl rounded-md">
                <figure><img src={img} alt="Album" /></figure>
                <div className="card-body">
                    <div>
                        <h1 className="card-title place-content-center text-3xl">{name}</h1>
                    </div>
                    <p className="text-sm p-0 m-0">Course Duration: {duration}</p>
                    <p className="subpixel-antialiased">Course Price: {price}</p>
                    <div className="card-actions justify-end">
                        <Link><button className="btn btn-primary">Purchase</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;