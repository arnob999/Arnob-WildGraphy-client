import React from 'react';
const Blog = () => {
    return (
        <div className="dark:bg-gray-800 dark:text-gray-100 pt-8 rounded-lg">
            <div className="container max-w-4xl px-10 my-5 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
                <div className="flex items-center justify-between">
                    <span className="text-sm dark:text-gray-400">Jun 1, 2020</span>
                    <p className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900">Database</p>
                </div>
                <div className="mt-3">
                    <p className="text-2xl font-bold hover:underline">What is the difference between SQL and NoSQL?</p>
                    <p className="mt-2">tables with logical links between them. NoSQL is a class of DBMs that are non-relational and generally do not use SQL. There are five practical differences between SQL and NoSQL:
                        1.Language
                        2.Scalability
                        3.communities
                        4.Support
                        5.Properties</p>
                </div>
                <div className="flex items-center justify-between mt-4">
                    <p rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-400">Read more...</p>
                    <div>
                        <p rel="noopener noreferrer" href="#" className="flex items-center">
                            <img src="https://source.unsplash.com/50x50/?portrait" alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
                            <span className="hover:underline dark:text-gray-400">Arnob</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="container max-w-4xl px-10 my-5 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
                <div className="flex items-center justify-between">
                    <span className="text-sm dark:text-gray-400">Jun 1, 2020</span>
                    <p className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900">Backend</p>
                </div>
                <div className="mt-3">
                    <p className="text-2xl font-bold hover:underline">What is JWT, and how does it work?</p>
                    <p className="mt-2">
                        SON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA.
                    </p>
                </div>
                <div className="flex items-center justify-between mt-4">
                    <p rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-400">Read more...</p>
                    <div>
                        <p rel="noopener noreferrer" href="#" className="flex items-center">
                            <img src="https://source.unsplash.com/50x50/?portrait" alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
                            <span className="hover:underline dark:text-gray-400">Arnob</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="container max-w-4xl px-10 my-5 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
                <div className="flex items-center justify-between">
                    <span className="text-sm dark:text-gray-400">Jun 1, 2020</span>
                    <p className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900">NodeJS</p>
                </div>
                <div className="mt-3">
                    <p className="text-2xl font-bold hover:underline">What is the difference between javascript and NodeJS?</p>
                    <p className="mt-2">JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. It requires libraries that can be conveniently accessed from JavaScript programming to be more helpful.</p>
                </div>
                <div className="flex items-center justify-between mt-4">
                    <p rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-400">Read more...</p>
                    <div>
                        <p rel="noopener noreferrer" href="#" className="flex items-center">
                            <img src="https://source.unsplash.com/50x50/?portrait" alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
                            <span className="hover:underline dark:text-gray-400">Arnob</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="container max-w-4xl px-10 my-5 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
                <div className="flex items-center justify-between">
                    <span className="text-sm dark:text-gray-400">Jun 1, 2020</span>
                    <p className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900">NodeJS</p>
                </div>
                <div className="mt-3">
                    <p className="text-2xl font-bold hover:underline">How does NodeJS handle multiple requests at the same time?</p>
                    <p className="mt-2">NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself.</p>
                </div>
                <div className="flex items-center justify-between mt-4">
                    <p rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-400">Read more...</p>
                    <div>
                        <p rel="noopener noreferrer" href="#" className="flex items-center">
                            <img src="https://source.unsplash.com/50x50/?portrait" alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
                            <span className="hover:underline dark:text-gray-400">Arnob</span>
                        </p>
                    </div>
                </div>
            </div>
            <br /><br />
        </div>
    );
};

export default Blog;