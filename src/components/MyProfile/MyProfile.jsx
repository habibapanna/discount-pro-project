import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider'; // Ensure your AuthProvider context is imported correctly

const MyProfile = () => {
  const { user } = useContext(AuthContext); // Adjust this based on how you manage authentication

  return (
    <div className="my-profile-page min-h-screen bg-gray-100 p-5">
      {/* Cover Section */}
      <div className="cover-section bg-blue-500 py-10 text-center text-white">
        <h1 className="text-4xl font-bold">Welcome to Your Profile!</h1>
        <p className="mt-2">Manage your account details here</p>
      </div>

      {/* User Information Card */}
      <div className="user-info-card mt-10 max-w-xl mx-auto p-5 bg-white rounded-lg shadow-md">
        {user ? (
          <div className="text-center">
            <img
              className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-500"
              src={user.photoURL || 'default-avatar.png'} // Replace with a placeholder if no photoURL is provided
              alt={user.displayName || 'User'}
            />
            <h2 className="text-2xl font-bold">{user.displayName || 'Name Unavailable'}</h2>
            <p className="text-gray-600">{user.email}</p>

            {/* Update Features */}
            <div className="update-features mt-5">
              <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Update Profile
              </button>
              <button className="bg-green-500 text-white py-2 px-4 rounded ml-3 hover:bg-green-600">
                Change Password
              </button>
            </div>
          </div>
        ) : (
          <p className="text-center text-red-500">User information not available.</p>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
