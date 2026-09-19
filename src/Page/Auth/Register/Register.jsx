import React, { useContext } from 'react';
import SocialLogin from '../../../Shared/SocialLogin';
import { useForm } from 'react-hook-form';
import { Authcontext } from '../../../Provider/AuthProvider/AuthProvider';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FaUser, FaEnvelope, FaLock, FaCloudUploadAlt } from 'react-icons/fa';

// Use Cloudinary as the alternative to ImgBB
// User can set their own Cloudinary credentials in .env or it falls back to a public demo preset for testing
const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || 'demo';
const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET || 'docs_upload_example_us_preset';
const cloudinaryUrl = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

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
        let imageUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(data.name)}&background=random&color=fff&size=256`;

        // If user uploaded an image, use Cloudinary alternative
        if (data.image && data.image.length > 0) {
            const formData = new FormData();
            formData.append('file', data.image[0]);
            formData.append('upload_preset', uploadPreset);

            const res = await fetch(cloudinaryUrl, {
                method: 'POST',
                body: formData
            });
            
            const cloudinaryData = await res.json();
            
            if (cloudinaryData.secure_url) {
                imageUrl = cloudinaryData.secure_url;
            } else {
                throw new Error('Image upload failed with Cloudinary.');
            }
        }

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

        <div className="space-y-1 pt-1">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest pl-1 block mb-1">Profile Photo (Optional)</label>
            <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-24 bg-gray-50 border-2 border-dashed border-gray-200 rounded-xl cursor-pointer hover:bg-white hover:border-primary transition-colors group"
            >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <FaCloudUploadAlt className="w-6 h-6 text-gray-400 group-hover:text-primary mb-1 transition-colors" />
                    <p className="text-xs text-gray-500 group-hover:text-primary transition-colors"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                </div>
                <input id="dropzone-file" type="file" {...register("image")} className="hidden" />
            </label>
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
