import mongoose from "mongoose";

const incidentSchema = new mongoose.Schema({
    incident_id: {
        type:String,
        unique:true
    },

    title: String,

    service: String,

    category: String,

    severity: String,

    environment: String,

    timestamp: Date,

    description: String,

    symptoms: [String],

    logs: [String],

    affected_components: [String],

    root_cause: String,

    resolution: [String],

    preventive_actions: [String],

    impact: String,

    status: String,

    resolution_time: String,

    keywords: [String]
});

const Incident = mongoose.model("Incident", incidentSchema);

export default Incident;