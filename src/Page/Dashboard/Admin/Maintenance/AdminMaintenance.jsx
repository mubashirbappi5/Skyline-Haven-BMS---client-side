import React from 'react';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import Loading from '../../../../Shared/Loading';
import { FaWrench, FaCheck, FaSpinner } from 'react-icons/fa';

const AdminMaintenance = () => {
    const axiosSecure = useAxiosSecure();

    const { data: requests = [], isLoading, refetch } = useQuery({
        queryKey: ['admin-maintenance'],
        queryFn: async () => {
            const res = await axiosSecure.get('/maintenance');
            return res.data;
        }
    });

    const handleUpdateStatus = (id, newStatus) => {
        Swal.fire({
            title: "Update Status?",
            text: `Mark this request as ${newStatus}?`,
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#10b981",
            cancelButtonColor: "#ef4444",
            confirmButtonText: "Yes, update it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await axiosSecure.patch(`/maintenance/${id}`, { status: newStatus });
                    refetch();
                    Swal.fire("Updated!", "The request status has been updated.", "success");
                } catch (error) {
                    Swal.fire("Error", "Could not update status.", "error");
                }
            }
        });
    };

    if (isLoading) return <Loading />;

    return (
        <div className="min-h-screen bg-gray-50/50 p-6 md:p-12 font-sans relative overflow-hidden">
            <div className="max-w-7xl mx-auto space-y-8 relative z-10">
                {/* Header */}
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-[2rem] p-10 shadow-xl text-white flex flex-col md:flex-row items-center justify-between">
                    <div>
                        <h1 className="text-4xl font-black mb-2 flex items-center gap-3">
                            <FaWrench className="text-emerald-400" /> Manage Maintenance
                        </h1>
                        <p className="text-gray-400 text-lg">View and update maintenance requests from members.</p>
                    </div>
                </div>

                {/* Content */}
                <div className="bg-white rounded-[2rem] p-8 shadow-lg border border-gray-100 overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b-2 border-gray-100">
                                <th className="text-left py-4 px-6 text-xs font-bold text-gray-400 uppercase tracking-widest">Date</th>
                                <th className="text-left py-4 px-6 text-xs font-bold text-gray-400 uppercase tracking-widest">Email</th>
                                <th className="text-left py-4 px-6 text-xs font-bold text-gray-400 uppercase tracking-widest">Issue</th>
                                <th className="text-left py-4 px-6 text-xs font-bold text-gray-400 uppercase tracking-widest">Status</th>
                                <th className="text-left py-4 px-6 text-xs font-bold text-gray-400 uppercase tracking-widest">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {requests.length > 0 ? (
                                requests.map(req => (
                                    <tr key={req._id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                                        <td className="py-4 px-6 text-sm text-gray-500 font-medium whitespace-nowrap">
                                            {new Date(req.createdAt).toLocaleDateString()}
                                        </td>
                                        <td className="py-4 px-6 text-sm font-bold text-gray-700">
                                            {req.userEmail}
                                        </td>
                                        <td className="py-4 px-6">
                                            <p className="font-bold text-gray-800">{req.title}</p>
                                            <p className="text-sm text-gray-500 line-clamp-1">{req.description}</p>
                                        </td>
                                        <td className="py-4 px-6">
                                            {req.status === 'pending' && <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-bold uppercase">Pending</span>}
                                            {req.status === 'in-progress' && <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase">In Progress</span>}
                                            {req.status === 'resolved' && <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold uppercase">Resolved</span>}
                                        </td>
                                        <td className="py-4 px-6 flex items-center gap-2">
                                            {req.status === 'pending' && (
                                                <button 
                                                    onClick={() => handleUpdateStatus(req._id, 'in-progress')}
                                                    className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
                                                    title="Mark In Progress"
                                                >
                                                    <FaSpinner />
                                                </button>
                                            )}
                                            {req.status !== 'resolved' && (
                                                <button 
                                                    onClick={() => handleUpdateStatus(req._id, 'resolved')}
                                                    className="p-2 bg-emerald-50 text-emerald-600 rounded-lg hover:bg-emerald-600 hover:text-white transition-colors"
                                                    title="Mark Resolved"
                                                >
                                                    <FaCheck />
                                                </button>
                                            )}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5" className="py-16 text-center text-gray-400 font-medium">
                                        No maintenance requests found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminMaintenance;
