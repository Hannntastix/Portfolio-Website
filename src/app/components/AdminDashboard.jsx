"use client"

import React, { useEffect, useState } from 'react';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Search, Filter, Edit, Trash2, SortDesc, SortAsc } from 'lucide-react';
import LoadingModal from './LoadingModal';
import DeleteConfirmationModal from './Modal';

const AdminDashboard = () => {
    const [feedbacks, setFeedbacks] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortOrder, setSortOrder] = useState("desc");
    const [deleteModal, setDeleteModal] = useState({
        isOpen: false,
        feedbackId: null,
        feedbackInfo: ''
    });

    useEffect(() => {
        const fetchFeedbacks = async () => {
            try {
                const res = await fetch('/api/feedback', {
                    cache: 'no-store',
                });

                if (!res.ok) {
                    throw new Error("Failed to fetch Feedback Info");
                }

                const data = await res.json();
                setFeedbacks(data.form);
            } catch (error) {
                console.log("Error Loading Information: ", error);
                setError(error.message);
            } finally {
                setLoading(false)
            }
        };

        fetchFeedbacks();
    }, []);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('id-ID', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    const toggleSortOrder = () => {
        setSortOrder(sortOrder === "desc" ? "asc" : "desc");
    };

    const openDeleteModal = (feedbackId, feedbackInfo) => {
        setDeleteModal({
            isOpen: true,
            feedbackId,
            feedbackInfo
        });
    };

    const closeDeleteModal = () => {
        setDeleteModal({
            isOpen: false,
            feedbackId: null,
            feedbackInfo: ''
        });
    };

    const handleDelete = async () => {
        try {
            const feedbackId = deleteModal.feedbackId;
            if (!feedbackId) return;

            const res = await fetch(`/api/feedback?id=${feedbackId}`, {
                method: "DELETE",
            });

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.message || "Failed to delete feedback");
            }

            setFeedbacks(feedbacks.filter(feedback => feedback._id !== feedbackId));
            closeDeleteModal();
        } catch (error) {
            console.error("Error deleting feedback:", error);
            setError(error.message);
            closeDeleteModal();
        }
    };

    const filteredFeedbacks = feedbacks
        .filter(feedback => feedback.feedbackInfo && feedback.feedbackInfo.toLowerCase().includes(searchTerm.toLowerCase()))
        .sort((a, b) => sortOrder === "desc" ? new Date(b.createdAt) - new Date(a.createdAt) : new Date(a.createdAt) - new Date(b.createdAt));

    if (loading) {
        return <LoadingModal />;
    }

    return (
        <div className="min-h-screen bg-none">
            {/* Delete Confirmation Modal */}
            <DeleteConfirmationModal
                isOpen={deleteModal.isOpen}
                onClose={closeDeleteModal}
                onConfirm={handleDelete}
                feedbackInfo={deleteModal.feedbackInfo}
            />

            {/* Top Navigation */}
            <div className="bg-none shadow-sm">
                <div className="max-w-7xl mx-auto px-4 py-4">
                    <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 py-8">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-sm font-medium">Total Feedback</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-2xl font-bold">{feedbacks.length}</p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="text-sm font-medium">New Feedback (Last 7 Days)</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-2xl font-bold">
                                {feedbacks.filter(f => {
                                    const oneWeekAgo = new Date();
                                    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
                                    return new Date(f.createdAt) > oneWeekAgo;
                                }).length}
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="text-sm font-medium">Latest Feedback</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-2xl font-bold">
                                {feedbacks.length > 0 ? formatDate(feedbacks.sort((a, b) =>
                                    new Date(b.createdAt) - new Date(a.createdAt))[0]?.createdAt) : "Tidak ada"}
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* Error State */}
                {error && <p className="text-center py-4 text-red-500">Error: {error}</p>}

                {/* Feedback Table */}
                <Card>
                    <CardHeader>
                        <CardTitle>User Feedback</CardTitle>
                        <div className="flex gap-4 mt-4">
                            <div className="relative flex-1">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                <input
                                    type="text"
                                    placeholder="Search feedback..."
                                    className="pl-10 pr-4 py-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                            <button
                                onClick={toggleSortOrder}
                                className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50"
                            >
                                {sortOrder === "desc" ? <SortDesc size={20} /> : <SortAsc size={20} />}
                                Sort
                            </button>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b">
                                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">No.</th>
                                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Feedback</th>
                                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Date</th>
                                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredFeedbacks.length > 0 ? (
                                        filteredFeedbacks.map((feedback, index) => (
                                            <tr key={feedback._id || index} className="border-b hover:bg-gray-50">
                                                <td className="px-6 py-4">{index + 1}</td>
                                                <td className="px-6 py-4">{feedback.feedbackInfo}</td>
                                                <td className="px-6 py-4">{formatDate(feedback.createdAt)}</td>
                                                <td className="px-6 py-4">
                                                    <button
                                                        onClick={() => openDeleteModal(feedback._id, feedback.feedbackInfo)}
                                                        className="p-1 rounded-full hover:bg-red-50 text-red-600"
                                                        title="Delete"
                                                    >
                                                        <Trash2 size={18} />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="4" className="px-6 py-4 text-center text-gray-500">
                                                {searchTerm ? "Tidak ada feedback yang cocok dengan pencarian" : "Belum ada feedback"}
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default AdminDashboard;