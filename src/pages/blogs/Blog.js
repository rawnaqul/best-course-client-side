import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">BLOG</h1>
                        <div className="collapse">
                            <input type="checkbox" />
                            <div className="collapse-title text-xl font-medium">
                                Click me to show/hide content
                            </div>
                            <div className="collapse-content">
                                <p>hello</p>
                            </div>
                        </div>
                        <div className="collapse">
                            <input type="checkbox" />
                            <div className="collapse-title text-xl font-medium">
                                Click me to show/hide content
                            </div>
                            <div className="collapse-content">
                                <p>hello</p>
                            </div>
                        </div>
                        <div className="collapse">
                            <input type="checkbox" />
                            <div className="collapse-title text-xl font-medium">
                                Click me to show/hide content
                            </div>
                            <div className="collapse-content">
                                <p>hello</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;