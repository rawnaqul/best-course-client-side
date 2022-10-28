import React from 'react';

const Blog = () => {
    return (
        <div className='text-justify'>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">BLOG</h1>
                        <div className="collapse">
                            <input type="checkbox" />
                            <div className="collapse-title text-xl font-medium text-lime-400">
                                What is `cors`?
                            </div>
                            <div className="collapse-content">
                                <p className='text-white text-justify'>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>
                            </div>
                        </div>
                        <div className="collapse">
                            <input type="checkbox" />
                            <div className="collapse-title text-xl font-medium text-lime-400">
                                Why are you using `firebase`? (What other options do you have to implement authentication?)
                            </div>
                            <div className="collapse-content">
                                <p className='text-white'>The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.

                                    Other Option to Authentication:MongoDB
                                    Passport
                                    Okta
                                    JSON web Token
                                    Amazon Cognito.
                                </p>
                            </div>
                        </div>
                        <div className="collapse">
                            <input type="checkbox" />
                            <div className="collapse-title text-xl font-medium text-lime-400">
                                How does the private route work?
                            </div>
                            <div className="collapse-content">
                                <p className='text-white'>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>
                            </div>
                        </div>
                        <div className="collapse">
                            <input type="checkbox" />
                            <div className="collapse-title text-xl font-medium text-lime-400">
                                What is Node? How does Node work?
                            </div>
                            <div className="collapse-content">
                                <p className='text-white'>Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications.

                                    How does Node work
                                    It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;