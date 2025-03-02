import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { toast } from 'react-toastify';
import { updateProfile } from 'firebase/auth'; // Import for profile updates
import { FcGoogle } from "react-icons/fc";
import { MdOutlineAppRegistration } from "react-icons/md";
const Register = () => {
    const { createNewUser, setUser, googleSignIn } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false); // State to toggle password visibility
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        // Password validation
        if (!/(?=.*[a-z])/.test(password)) {
            setError("Password must contain at least one lowercase letter");
            return;
        }
        if (!/(?=.*[A-Z])/.test(password)) {
            setError("Password must contain at least one uppercase letter");
            return;
        }
        if (password.length < 6) {
            setError("Password must be at least 6 characters");
            return;
        }

        setError('');

        try {
            const result = await createNewUser(email, password);
            const user = result.user;

            // Update user profile with display name and photo URL
            await updateProfile(user, {
                displayName: name,
                photoURL: photo,
            });

            // Set user in context
            setUser({ ...user });

            // Show success message
            toast.success("Registration successful!");

            // Navigate to the home page
            navigate('/');
        } catch (error) {
            // Handle registration errors
            setError(error.message);
            toast.error(error.message || "Registration failed");
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            const result = await googleSignIn();
            const user = result.user;

            // Set user in context
            setUser(user);

            // Show success message
            toast.success("Google sign-in successful!");

            // Navigate to the home page
            navigate('/');
        } catch (error) {
            // Handle Google sign-in errors
            toast.error(error.message || "Google sign-in failed");
        }
    };

    return (
        <div className="flex justify-center items-center mt-12 px-10">
            <div className="card p-10 border bg-base-100 w-full max-w-xl shrink-0 shadow-lg">
                <h1 className="text-2xl font-bold text-center">Register Your Account</h1>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input name="name" type="text" placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input name="photo" type="text" placeholder="photo-url" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <div className="relative">
                            <input
                                name="password"
                                type={passwordVisible ? 'text' : 'password'}
                                placeholder="password"
                                className="input input-bordered w-full"
                                required
                            />
                            <span
                                onClick={() => setPasswordVisible(!passwordVisible)}
                                className="absolute right-3 top-3 cursor-pointer"
                            >
                                {passwordVisible ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m2 8h.01M21 21l-6-6m2-3a6 6 0 10-12 0 6 6 0 0012 0z" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12h.01M19.07 4.93a10 10 0 11-14.14 14.14 10 10 0 0114.14-14.14z" />
                                    </svg>
                                )}
                            </span>
                        </div>
                    </div>
                    {error && <p className="text-red-500">{error}</p>}
                    <div className="form-control mt-6">
                        <button className="btn bg-green-400 hover:bg-green-500"><MdOutlineAppRegistration /> Register</button>
                    </div>
                    <p className="text-red-500 font-semibold">
                        Already have an account?{' '}
                        <Link className="hover:underline text-blue-500" to="/login">
                            Login
                        </Link>
                    </p>
                    <button onClick={handleGoogleSignIn} type="button" className="btn bg-white border border-blue-400 mt-4 w-full"><FcGoogle className='text-2xl' /> 
                        Sign Up with Google
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;
