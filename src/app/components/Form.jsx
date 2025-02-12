"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Star } from 'lucide-react';

const FeedbackForm = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <div className="w-full max-w-lg text-center px-4 space-y-12">
                <div className="text-center mb-6">
                    <h2 className="text-3xl font-bold text-white mb-2 mt-10">Please Give Your Feedback</h2>
                    <p className="text-gray-300">Help Me To Improve My Portfolio and My Values</p>
                </div>

                <form className="space-y-6">
                    {/* Rating Stars */}
                    <div className="flex flex-col items-center gap-2">
                        <label className="text-sm font-medium text-zinc-300">Rating</label>
                        <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                    type="button"
                                    key={star}
                                    className="focus:outline-none"
                                    onClick={() => setRating(star)}
                                    onMouseEnter={() => setHover(star)}
                                    onMouseLeave={() => setHover(0)}
                                >
                                    <Star
                                        className={`w-8 h-8 ${star <= (hover || rating)
                                            ? 'text-blue-400 fill-yellow-400'
                                            : 'text-gray-300'
                                            }`}
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Feedback Text */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-zinc-300">Feedback</label>
                        <Textarea
                            className="min-h-[120px] bg-white text-gray-700"
                            placeholder="Type Your Thought Here..."
                        />
                    </div>

                    {/* Submit Button */}
                    <Button className="select-none w-full bg-indigo-700 hover:bg-blue-800 text-white py-2 rounded-md transition-colors">
                        Send Feedback
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default FeedbackForm;