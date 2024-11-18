import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const { logOut } = useContext(AuthContext); // Make sure logOut is used here

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const emailFromQuery = queryParams.get('email');
        if (emailFromQuery) {
            setEmail(emailFromQuery);
        }
    }, [location.search]);

    const handlePasswordReset = () => {
        const auth = getAuth();
        sendPasswordResetEmail(auth, email)
            .then(() => {
                toast.success('Password reset email sent!');
                logOut(); // Log out the user after sending the reset email
                navigate('/login'); // Redirect to login page after logout
            })
            .catch((error) => {
                toast.error(error.message || "Failed to send reset email.");
            });
    };

    return (
        <div className="flex justify-center items-center mt-12">
            <div className="card p-10 bg-base-100 w-full max-w-xl border shrink-0 shadow-lg">
                <h1 className="text-2xl font-bold text-center">Reset Password</h1>
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} // Allow editing the email field
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control mt-6">
                        <button
                            type="button"
                            onClick={handlePasswordReset}
                            className="btn btn-primary"
                        >
                            Reset Password
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;
