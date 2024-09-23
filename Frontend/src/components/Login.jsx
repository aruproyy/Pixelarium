import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';

function Login() {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const userInfo = {
            email: data.email,
            password: data.password,
        };

        try {
            const res = await axios.post("http://localhost:4001/user/login", userInfo);

            if (res.data) {
                toast.success('Login Successful');
                localStorage.setItem("Users", JSON.stringify(res.data.user));
                document.getElementById("my_modal_3").close();
                
                setTimeout(() => {
                    navigate(from, { replace: true });
                    window.location.href = from;  // Navigate back to the previous page
                }, 1000);
            }
        } catch (err) {
            if (err.response) {
                toast.error("Login Error: " + err.response.data.message);
            } else {
                toast.error("An error occurred. Please try again.");
            }
        }
    };

    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 dark:text-black"
                            onClick={() => document.getElementById("my_modal_3").close()}>✕</Link>

                        <h3 className="font-bold text-lg dark:text-black">Login to Pixelarium</h3>

                        <div className="mt-4 space-y-2 dark:text-black">
                            <span>Email</span>
                            <br />
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-80 px-3 py-1 rounded-md"
                                {...register("email", { required: true })}
                            />
                            <br />
                            {errors.email && <span className="text-sm text-red-500">This field is required</span>}
                        </div>

                        <div className="mt-4 space-y-2 dark:text-black">
                            <span>Password</span>
                            <br />
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="w-80 px-3 py-1 rounded-md"
                                {...register("password", { required: true })}
                            />
                            <br />
                            {errors.password && <span className="text-sm text-red-500">This field is required</span>}
                        </div>

                        <div className="flex justify-around mt-4 dark:text-black">
                            <button type="submit" className="bg-yellow-700 text-white px-3 py-1 hover:bg-yellow-500 duration-200">Login</button>
                            <p>Not registered? <Link to="/signup" className="underline text-blue-500 cursor-pointer">Signup</Link></p>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
}

export default Login;