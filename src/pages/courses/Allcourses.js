import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Courses from './Courses';
import Sidebar from './Sidebar';

const Allcourses = () => {

    return (
        <div className='rounded-md p-2 mt-20'>
            <div className='grid grid-cols-4 gap-4'>
                <div className='col-span-1 bg-white rounded-md p-3 bg-inherit'>
                    <Sidebar></Sidebar>
                </div>
                <div className='col-span-3 bg-gray-50 rounded-md p-3 bg-gray-800'>
                    <Outlet></Outlet>

                </div>
            </div>
        </div>
    );
};

export default Allcourses;