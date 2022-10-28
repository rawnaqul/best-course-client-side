import React from 'react';

const Home = () => {
    return (
        <div className=''>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Home</h1>
                        <p className="mb-5">Detailed explanations and rigorous assessments ensure you're ready for your next step. Build your medical biochemistry knowledge with online courses from Harvard.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;