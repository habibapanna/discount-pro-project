import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { toast } from 'react-toastify';
import { getAuth, updateProfile } from 'firebase/auth';

const UpdateProfile = () => {
    const { user, setUser } = useContext(AuthContext);
    const [name, setName] = useState(user?.displayName || '');
    const [photoURL, setPhotoURL] = useState(user?.photoURL || '');
    const navigate = useNavigate();

    const handleUpdate = () => {
        if (name && photoURL) {
            // Get the Firebase Auth instance
            const auth = getAuth();
            updateProfile(auth.currentUser, {
                displayName: name,
                photoURL: photoURL,
            })
                .then(() => {
                    // Update the context with new user data
                    setUser({ ...user, displayName: name, photoURL: photoURL });
                    toast.success('Profile updated successfully!');
                    navigate('/profile'); // Navigate back to profile page
                })
                .catch(error => {
                    toast.error('Error updating profile: ' + error.message);
                });
        } else {
            toast.error('Both fields are required!');
        }
    };

    return (
        <div className="flex justify-center items-center mt-12">
            <div className="card p-10 bg-base-100 w-full max-w-xl border shrink-0 shadow-lg">
                <h1 className="text-2xl font-bold text-center">Update Your Profile</h1>
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control mt-4">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input
                            type="url"
                            value={photoURL}
                            onChange={(e) => setPhotoURL(e.target.value)}
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control mt-6">
                        <button
                            type="button"
                            onClick={handleUpdate}
                            className="btn btn-primary"
                        >
                            Update Information
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;
