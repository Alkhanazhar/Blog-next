import mongoose from "mongoose"

const Email = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now(),
    }
})

export const EmailModel = mongoose.models.Email || mongoose.model("Email", Email)