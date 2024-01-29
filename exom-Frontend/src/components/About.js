import React from 'react';
import { useSelector } from 'react-redux';

const About = () => {
    const user = useSelector(state => state.userInfo.user);
    const isAuthenticated = useSelector(state => state.userInfo.isAuthenticated);

    return (
        <div className="bg-gray-100 min-h-screen py-8">
            <div className="max-w-2xl mx-auto bg-white p-8 rounded shadow-md">
                <h2 className="text-3xl font-semibold mb-4 text-center">About Page</h2>

                {isAuthenticated ? (
                    <div>
                        <div className="mb-4">
                            <p className="text-lg font-semibold">Username:</p>
                            <p className="text-gray-700">{user.username}</p>
                        </div>
                        <div className="mb-4">
                            <p className="text-lg font-semibold">Email:</p>
                            <p className="text-gray-700">{user.email}</p>
                        </div>
                        <div className="mb-4">
                            <p className="text-lg font-semibold">Phone:</p>
                            <p className="text-gray-700">{user.phone}</p>
                        </div>
                        <div className="mb-4">
                            <p className="text-lg font-semibold">ID:</p>
                            <p className="text-gray-700">{user.id}</p>
                        </div>
                        <div className="mb-4">
                            <p className="text-lg font-semibold">Token:</p>
                            <p className="text-gray-700 break-all">{user.token}</p>
                        </div>
                    </div>
                ) : (
                    <p className="text-lg text-gray-700">
                        User not authenticated. Please log in to view the details.
                    </p>
                )}
            </div>
        </div>
    );
};

export default About;
