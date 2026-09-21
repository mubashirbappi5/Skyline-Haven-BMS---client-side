import React, { useState } from 'react';
import useAuth from '../../../../Hooks/useAuth';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import Loading from '../../../../Shared/Loading';
import { FaWrench, FaTools, FaCheckCircle, FaClock } from 'react-icons/fa';

const MemberMaintenance = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const [loadingAction, setLoadingAction] = useState(false);

    const { data: requests = [], isLoading, refetch } = useQuery({
        queryKey: ['maintenance', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/maintenance/member/${user?.email}`);
            return res.data;
        }
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const description = form.description.value;

        setLoadingAction(true);
        try {
            const reqData = { userEmail: user.email, title, description };
            await axiosSecure.post('/maintenance', reqData);
            
            Swal.fire({
                title: "Submitted!",
                text: "Your maintenance request has been sent.",
                icon: "success"
            });
            form.reset();
            refetch();
        } catch (error) {
            Swal.fire("Error", "Could not submit request", "error");
        } finally {
            setLoadingAction(false);
        }
    };

    if (isLoading) return <Loading />;

    return (
        <div className="min-h-screen bg-gray-50/50 p-6 md:p-12 font-sans relative overflow-hidden">
            <div className="max-w-7xl mx-auto space-y-12 relative z-10">
                {/* Header */}
                <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-[2rem] p-10 shadow-xl text-white flex flex-col md:flex-row items-center justify-between">
                    <div>
                        <h1 className="text-4xl font-black mb-2 flex items-center gap-3">
                            <FaWrench /> Maintenance Requests
                        </h1>
                        <p className="text-emerald-100 text-lg">Report any issues with your apartment directly to management.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Submit Form */}
                    <div className="lg:col-span-1 bg-white p-8 rounded-[2rem] shadow-lg border border-gray-100 h-fit">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                            <FaTools className="text-emerald-500" /> New Request
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="text-sm font-bold text-gray-700 mb-2 block">Issue Title</label>
                                <select 
                                    name="title" 
                                    required 
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-emerald-500/50 outline-none transition-all text-gray-700"
                                >
                                    <option value="" disabled selected>Select an issue category</option>
                                    <option value="Plumbing">Plumbing (Leaks, Pipes)</option>
                                    <option value="Electrical">Electrical (Wiring, Outlets)</option>
                                    <option value="HVAC">AC / Heating (HVAC)</option>
                                    <option value="Appliances">Broken Appliances</option>
                                    <option value="Structural">Structural (Doors, Windows, Walls)</option>
                                    <option value="Pest Control">Pest Control</option>
                                    <option value="Other">Other General Maintenance</option>
                                </select>
                            </div>
                            <div>
                                <label className="text-sm font-bold text-gray-700 mb-2 block">Description</label>
                                <textarea
                                    name="description"
                                    required
                                    rows="4"
                                    placeholder="Please describe the issue in detail..."
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-emerald-500/50 outline-none transition-all text-gray-700"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={loadingAction}
                                className="w-full py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl font-bold shadow-md hover:shadow-lg transform transition-all hover:-translate-y-1 disabled:opacity-50"
                            >
                                {loadingAction ? "Submitting..." : "Submit Request"}
                            </button>
                        </form>
                    </div>

                    {/* Request History */}
                    <div className="lg:col-span-2 bg-white p-8 rounded-[2rem] shadow-lg border border-gray-100">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                            <FaClock className="text-emerald-500" /> My Requests History
                        </h2>
                        {requests.length > 0 ? (
                            <div className="space-y-4">
                                {requests.map((req) => (
                                    <div key={req._id} className="border border-gray-100 rounded-2xl p-6 bg-gray-50 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 transition-all hover:shadow-md hover:bg-white">
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-800">{req.title}</h3>
                                            <p className="text-gray-500 text-sm mt-1">{req.description}</p>
                                            <p className="text-xs text-gray-400 mt-3">{new Date(req.createdAt).toLocaleString()}</p>
                                        </div>
                                        <div>
                                            {req.status === 'pending' && <span className="px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-xs font-bold uppercase tracking-wider">Pending</span>}
                                            {req.status === 'in-progress' && <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider">In Progress</span>}
                                            {req.status === 'resolved' && <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1"><FaCheckCircle/> Resolved</span>}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-20 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
                                <FaTools className="mx-auto text-4xl text-gray-300 mb-4" />
                                <h3 className="text-xl font-bold text-gray-400">No requests found</h3>
                                <p className="text-gray-400 mt-2">You haven't submitted any maintenance requests yet.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MemberMaintenance;
