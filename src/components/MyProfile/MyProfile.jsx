import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const MyProfile = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="relative h-60 bg-cover bg-center" style={{ backgroundImage: 'url(https://i.ibb.co.com/T6VF6RJ/ben-sweet-2-Lowvi-VHZ-E-unsplash.jpg)' }}>
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <h1 className="text-4xl text-white font-bold">Welcome to Your Profile</h1>
                </div>
            </div>
            <div className="mt-10 flex justify-center">
                <div className="bg-white p-6 shadow-md rounded-lg w-96">
                    {user ? (
                        <>
                            <img className="w-24 h-24 rounded-full mx-auto" src={user.photoURL || 'https://i.ibb.co.com/0CpDp01/download-8.jpg'} alt="User" />
                            <h2 className="text-2xl text-center mt-4 font-semibold">{user.displayName || 'Elon Musk'}</h2>
                            <p className="text-center text-gray-600 mt-2">{user.email}</p>
                            <div className="flex justify-center mt-4">
                                <Link to="/update-profile" className="btn btn-primary">Update Information</Link>
                            </div>
                        </>
                    ) : (
                        <p className="text-center text-red-500">User data not available.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MyProfile;
