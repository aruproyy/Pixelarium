import React from 'react';
import { Link, replace, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Login from './Login';
import axios from 'axios';
import toast from 'react-hot-toast';

function Signup() {
    const navigate = useNavigate();
    const location=useLocation();
    const from=location.state?.from?.pathname || "/";
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const userInfo = {
            fullname: data.fullname,
            email: data.email,
            password: data.password,
        }
        await axios.post("http://localhost:4001/user/signup", userInfo)
            .then((res) => {
                console.log(res.data)
                if (res.data) {
                    toast.success('Signup Succesfuly');
                    navigate(from,{replace: true});
                    setTimeout(() => {
                        window.location.reload();
                    },1000)
                }
                localStorage.setItem("Users", JSON.stringify(res.data.user));
            }).catch((err) => {
                if (err.response) {
                    console.log(err);
                    toast.error("Signup Error: " + err.response.data.message);
                }
            })
    };

    return (
        <>
            <div className="flex h-screen items-center justify-center">
                <div className="w-[600px]">
                    <div className="modal-box">
                        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

                            <h3 className="font-bold text-lg">Signup to Pixelarium</h3>

                            <div className="mt-4 space-y-2">
                                <span>Name</span>
                                <br />
                                <input
                                    type="text"
                                    placeholder="Enter your Fullname"
                                    className="w-80 px-3 py-1 rounded-md"
                                    {...register("fullname", { required: true })}
                                />
                                <br />
                                {errors.fullname && <span className="text-sm text-red-500">This field is required</span>}
                            </div>

                            <div className="mt-4 space-y-2">
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

                            <div className="mt-4 space-y-2">
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

                            <div className="flex justify-around mt-4">
                                <button type="submit" className="bg-yellow-700 text-white px-3 py-1 hover:bg-yellow-500 duration-200">
                                    Signup
                                </button>
                                <p>
                                    Have an account?
                                    <button
                                        type="button"
                                        className="underline text-blue-500 cursor-pointer"
                                        onClick={() => document.getElementById("my_modal_3").showModal()}
                                    >
                                        Login
                                    </button>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* Login modal that can be triggered */}
            <Login />
        </>
    );
}

export default Signup;
