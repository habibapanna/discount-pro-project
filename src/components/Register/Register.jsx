import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { toast } from 'react-toastify';

const Register = () => {
    const { createNewUser, setUser, googleSignIn } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
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
        createNewUser(email, password)
            .then(result => {
                const user = result.user;
                setUser({ ...user, displayName: name, photoURL: photo }); // Set display name and photo
                toast.success("Registration successful!");
                navigate("/"); // Navigate to home after successful registration
            })
            .catch((error) => {
                toast.error(error.message || "Registration failed");
            });
    };

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                setUser(user);
                toast.success("Google sign-in successful!");
                navigate("/");
            })
            .catch(error => {
                toast.error(error.message || "Google sign-in failed");
            });
    };

    return (
        <div className='flex justify-center items-center mt-12'>
            <div className="card p-10 border bg-base-100 w-full max-w-xl shrink-0 shadow-lg">
                <h1 className='text-2xl font-bold text-center'>Register Your Account</h1>
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
                        <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                    </div>
                    {error && <p className="text-red-500">{error}</p>}
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                    <p className='text-red-500 font-semibold'>Already have an account? <Link className='hover:underline text-blue-500' to="/login">Login</Link></p>
                    <button onClick={handleGoogleSignIn} type="button" className="btn btn-secondary mt-4 w-full">Sign Up with Google</button>
                </form>
            </div>
        </div>
    );
};

export default Register;
