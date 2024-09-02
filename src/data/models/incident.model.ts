import mongoose from "mongoose";

const incidentScheme = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    lat: {
        type: Number,
        required: true
    },
    lng: {
        type: Number,
        required: true
    }
});

export const IncidentModel = mongoose.model("Incident", incidentScheme)
