import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { MdAddBusiness, MdOutlineImage } from 'react-icons/md';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';

const image_hosting_key = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;
const cloud_name = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const image_hosting_api = `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`;

const AddApartment = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const onSubmit = async (data) => {
        setLoading(true);
        try {
            let imageUrl = '';

            // Handle image upload to Cloudinary
            if (data.image && data.image[0]) {
                const formData = new FormData();
                formData.append('file', data.image[0]);
                formData.append('upload_preset', image_hosting_key);

                const res = await fetch(image_hosting_api, {
                    method: 'POST',
                    body: formData
                });
                
                const cloudData = await res.json();
                if (cloudData.secure_url) {
                    imageUrl = cloudData.secure_url;
                } else {
                    toast.error('Failed to upload image');
                    setLoading(false);
                    return;
                }
            } else {
                toast.error('Image is required');
                setLoading(false);
                return;
            }

            // Add apartment to database
            const apartmentInfo = {
                apartmentNo: data.apartmentNo,
                blockName: data.blockName,
                floorNo: parseInt(data.floorNo),
                rent: parseFloat(data.rent),
                imageUrl: imageUrl
            };

            const response = await axiosSecure.post('/apartments', apartmentInfo);

            if (response.data?.id) {
                toast.success(`Apartment ${data.apartmentNo} added successfully!`);
                reset();
            }
        } catch (error) {
            console.error(error);
            toast.error(error.response?.data?.message || 'Failed to add apartment');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-6 md:p-10 max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-8 border border-white/40">
                <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-100">
                    <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                        <MdAddBusiness size={28} />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800">Add New Apartment</h2>
                        <p className="text-sm text-gray-500 mt-1">Create a new listing for the Skyline Haven property</p>
                    </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        
                        {/* Apartment Number */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Apartment Number</label>
                            <input
                                type="text"
                                placeholder="e.g., A101"
                                className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm"
                                {...register("apartmentNo", { required: "Apartment Number is required" })}
                            />
                            {errors.apartmentNo && <span className="text-red-500 text-xs mt-1 block">{errors.apartmentNo.message}</span>}
                        </div>

                        {/* Block Name */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Block Name</label>
                            <input
                                type="text"
                                placeholder="e.g., Block A"
                                className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm"
                                {...register("blockName", { required: "Block Name is required" })}
                            />
                            {errors.blockName && <span className="text-red-500 text-xs mt-1 block">{errors.blockName.message}</span>}
                        </div>

                        {/* Floor Number */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Floor Number</label>
                            <input
                                type="number"
                                placeholder="e.g., 1"
                                className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm"
                                {...register("floorNo", { required: "Floor Number is required", min: 1 })}
                            />
                            {errors.floorNo && <span className="text-red-500 text-xs mt-1 block">{errors.floorNo.message}</span>}
                        </div>

                        {/* Rent Amount */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Rent Amount ($)</label>
                            <input
                                type="number"
                                placeholder="e.g., 1500"
                                className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm"
                                {...register("rent", { required: "Rent amount is required", min: 1 })}
                            />
                            {errors.rent && <span className="text-red-500 text-xs mt-1 block">{errors.rent.message}</span>}
                        </div>
                    </div>

                    {/* Image Upload */}
                    <div className="pt-4">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Apartment Image</label>
                        <div className="flex items-center justify-center w-full">
                            <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-xl cursor-pointer bg-gray-50/50 hover:bg-blue-50/50 transition-colors">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <MdOutlineImage className="w-8 h-8 mb-3 text-gray-400" />
                                    <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                </div>
                                <input 
                                    type="file" 
                                    className="hidden" 
                                    accept="image/*"
                                    {...register("image", { required: "Image is required" })}
                                />
                            </label>
                        </div>
                        {errors.image && <span className="text-red-500 text-xs mt-2 block">{errors.image.message}</span>}
                    </div>

                    <div className="pt-6">
                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full py-3.5 px-4 rounded-xl text-white font-semibold flex items-center justify-center gap-2 transition-all ${
                                loading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg'
                            }`}
                        >
                            {loading ? (
                                <span className="loading loading-spinner loading-sm"></span>
                            ) : (
                                <MdAddBusiness size={20} />
                            )}
                            {loading ? 'Adding Apartment...' : 'Add Apartment'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddApartment;
