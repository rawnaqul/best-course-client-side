import React from 'react';
import Courses from './Courses';
import Sidebar from './Sidebar';

const Allcourses = () => {
    return (
        <div>
            <div className='grid grid-cols-4 gap-4'>
                <div className='col-span-1 bg-white'>
                    <Sidebar></Sidebar>
                </div>
                <div className='col-span-3 bg-gray-50'>
                    <Courses></Courses>
                </div>
            </div>
        </div>
    );
};

export default Allcourses;