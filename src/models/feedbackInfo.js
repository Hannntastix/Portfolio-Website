import mongoose from "mongoose";
import { Schema } from "mongoose"

const feedbackInfoSchema = new Schema({
    feedbackInfo: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
});

const FeedbackInfo = mongoose.models.FeedbackInfo || mongoose.model("FeedbackInfo", feedbackInfoSchema);

export default FeedbackInfo;
