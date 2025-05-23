"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Star } from "lucide-react";
import { useRouter } from "next/navigation";
import LoadingModal from "../components/LoadingModal";

const FeedbackForm = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [feedbackInfo, setFeedbackInfo] = useState("");
    const [isDisabled, setIsDisabled] = useState(true);
    const [isPressed, setIsPressed] = useState(false);

    const router = useRouter();

    useEffect(() => {
        setIsDisabled(feedbackInfo.trim().length < 2);
    }, [feedbackInfo]);

    const handleSubmit = async (e) => {

        setIsPressed(true);
        setIsDisabled(true);

        e.preventDefault();

        const res = await fetch("https://portfolio-m-raihan-athalah-ilhams-projects.vercel.app/api/feedback", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({ feedbackInfo }),
        });

        if (res.ok) {
            router.push(`/thankyou`);
        } else {
            throw new Error("Failed to create a topic");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <div className="w-full max-w-lg text-center px-4 space-y-12">
                <div className="text-center mb-6">
                    <h2 className="text-3xl font-bold text-white mb-2 mt-10">Please Give Me Your Feedback</h2>
                    <p className="text-gray-300">Help Me To Improve My Portfolio and My Values</p>
                </div>

                <form className="space-y-6" onSubmit={handleSubmit}>
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
                                            ? "text-blue-400 fill-yellow-400"
                                            : "text-gray-300"
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
                            value={feedbackInfo}
                            onChange={(e) => setFeedbackInfo(e.target.value)}
                        />
                    </div>

                    {/* Submit Button */}
                    {isPressed ? (
                        <Button
                            type="submit"
                            disabled={isDisabled}
                            className={`select-none my-7 inline-flex items-center gap-2 px-4 py-2 ${isDisabled
                                ? "bg-blue-950 text-white"
                                : "transform transition-transform duration-400 ease-in-out hover:scale-110 bg-gradient-to-r from-indigo-700 to-indigo-950 text-white"
                                } rounded-lg shadow-md hover:shadow-lg group`}
                        >
                            <svg
                                className="animate-spin h-5 w-5 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                ></circle>
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                ></path>
                            </svg>
                            Loading...
                        </Button>
                    ) : (
                        <Button
                            type="submit"
                            disabled={isDisabled}
                            className={`select-none w-full py-2 rounded-md transition-color ${isDisabled
                                ? "bg-gray-300 text-zinc-700 cursor-not-allowed"
                                : "transform transition-transform duration-400 ease-in-out bg-indigo-700 hover:bg-blue-800 text-white"
                                }`}
                        >
                            Send Feedback
                        </Button>
                    )}
                </form>
            </div>
        </div>
    );
};

export default FeedbackForm;
