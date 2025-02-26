"use client"

import React from 'react';
import { X, AlertTriangle } from 'lucide-react';

const DeleteConfirmationModal = ({ isOpen, onClose, onConfirm, feedbackInfo }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
            <div className="bg-white rounded-xl shadow-2xl max-w-md w-full transform scale-100 transition-all duration-200">
                {/* Header with Warning Icon */}
                <div className="flex items-center justify-between p-5 border-b">
                    <div className="flex items-center space-x-3">
                        <div className="bg-red-100 p-2 rounded-full">
                            <AlertTriangle className="text-red-600" size={22} />
                        </div>
                        <h2 className="text-lg font-semibold text-gray-800">Konfirmasi Penghapusan</h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-full p-1 transition-colors"
                        aria-label="Close"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Body Content */}
                <div className="p-6">
                    <p className="text-gray-700 mb-5">
                        Apakah Anda yakin ingin menghapus feedback ini? Tindakan ini tidak dapat dibatalkan.
                    </p>

                    {feedbackInfo && (
                        <div className="mb-6">
                            <div className="border-l-4 border-red-500 pl-4 py-2 bg-gray-50 rounded-r-md text-sm">
                                <p className="font-medium text-gray-600 mb-1">Feedback yang akan dihapus:</p>
                                <p className="italic text-gray-700">"{feedbackInfo}"</p>
                            </div>
                        </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex justify-end space-x-3 mt-4">
                        <button
                            onClick={onClose}
                            className="px-5 py-2.5 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 hover:border-gray-400 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-1"
                        >
                            Batal
                        </button>
                        <button
                            onClick={onConfirm}
                            className="px-5 py-2.5 bg-red-600 rounded-lg text-white font-medium hover:bg-red-700 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-1"
                        >
                            Hapus Feedback
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmationModal;