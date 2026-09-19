import React, { useContext } from 'react';
import SocialLogin from '../../../Shared/SocialLogin';
import { useForm } from 'react-hook-form';
import { Authcontext } from '../../../Provider/AuthProvider/AuthProvider';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';

const Register = () => {
  const axiosPublic = useAxiosPublic()
  const navigate = useNavigate()
  const {signupUser,updateuser, } = useContext(Authcontext)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async(data) => {
    try{
        // Skip ImgBB and generate a beautiful default avatar
        const imageUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(data.name)}&background=random&color=fff&size=256`;

        const userReg = await signupUser(data.email, data.password);
        const user =  userReg.user;

        const profile = {
            displayName: data.name,
            photoURL: imageUrl,
        };

        await updateuser(profile);

        navigate('/')
        const userinfo = {
            userName:data.name,
            userEmail:data.email,
            photoURL: imageUrl
        }
        reset();
        const result = await axiosPublic.post('/users',userinfo)

        Swal.fire({
            title: "Signup",
            text: "Welcome to our world!",
            icon: "success",
        });
    }
    catch (error) {
        console.error(error.message);
        Swal.fire({
            title: "Error",
            text: error.message,
            icon: "error",
        });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 relative z-10">
        
        <div className="space-y-1">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest pl-1">Username</label>
            <div className="relative flex items-center">
                <span className="absolute left-4 text-gray-400">
                    <FaUser />
                </span>
                <input
                    type="text"
                    {...register("name", { required: "Username is required" })}
                    className="w-full py-3 pl-11 pr-4 bg-gray-50 border border-gray-100 rounded-xl text-text focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all shadow-sm text-sm"
                    placeholder="John Doe"
                />
            </div>
            {errors.name && <p className="text-red-500 text-xs pl-1 mt-1">{errors.name.message}</p>}
        </div>

        <div className="space-y-1">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest pl-1">Email Address</label>
            <div className="relative flex items-center">
                <span className="absolute left-4 text-gray-400">
                    <FaEnvelope />
                </span>
                <input
                    type="email"
                    {...register("email", { required: "Email is required" })}
                    className="w-full py-3 pl-11 pr-4 bg-gray-50 border border-gray-100 rounded-xl text-text focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all shadow-sm text-sm"
                    placeholder="john@example.com"
                />
            </div>
            {errors.email && <p className="text-red-500 text-xs pl-1 mt-1">{errors.email.message}</p>}
        </div>

        <div className="space-y-1">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest pl-1">Password</label>
            <div className="relative flex items-center">
                <span className="absolute left-4 text-gray-400">
                    <FaLock />
                </span>
                <input
                    type="password"
                    {...register("password", {
                        pattern: {
                            value: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
                            message: "Password must be strong (e.g., contain uppercase, lowercase, numbers)",
                        },
                    })}
                    className="w-full py-3 pl-11 pr-4 bg-gray-50 border border-gray-100 rounded-xl text-text focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all shadow-sm text-sm"
                    placeholder="••••••••"
                />
            </div>
            {errors.password && <p className="text-red-500 text-xs pl-1 mt-1">{errors.password.message}</p>}
        </div>

        <button
            type="submit"
            className="w-full py-3 mt-6 text-sm font-black tracking-widest uppercase rounded-xl bg-text text-white hover:bg-primary shadow-xl hover:shadow-primary/30 transform hover:-translate-y-1 transition-all duration-300"
        >
            Create Account
        </button>
        
        <SocialLogin />
    </form>
  );
};

export default Register;
