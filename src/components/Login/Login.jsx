import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { toast } from 'react-toastify';
import { CiLogin } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
const Login = () => {
    const { userLogin, setUser, googleSignIn, logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        userLogin(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                toast.success("Logged in successfully!");
                navigate("/"); // Navigate to home after successful login
            })
            .catch((error) => {
                toast.error(error.message || "Invalid email or password");
            });
    };

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                setUser(user);
                toast.success("Google sign-in successful!");
                navigate("/"); // Navigate to home after successful Google sign-in
            })
            .catch(error => {
                toast.error(error.message || "Google sign-in failed");
            });
    };

    const handleEmailChange = (e) => setEmail(e.target.value);

    return (
        <div className='flex justify-center items-center mt-12 px-10'>
            <div className="card p-10 bg-base-100 w-full max-w-xl border shrink-0 shadow-lg">
                <h1 className='text-2xl font-bold text-center'>Login to Your Account</h1>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input 
                            name="email" 
                            type="email" 
                            placeholder="email" 
                            className="input input-bordered" 
                            required 
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <Link 
                                to="/forgot" 
                                className="label-text-alt link link-hover">
                                Forgot password?
                            </Link>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-blue-400 hover:bg-blue-500"><CiLogin /> Login</button>
                    </div>
                    <p className='text-red-500 font-semibold'>Don't have an account? <Link className='hover:underline text-blue-500' to="/register">Register</Link></p>
                    <button onClick={handleGoogleSignIn} className="btn bg-white border border-blue-400 mt-4 w-full"><FcGoogle className='text-2xl' /> Login with Google</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
