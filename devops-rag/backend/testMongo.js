import mongoose from "mongoose";
import Incident from "./models/Incident.js";

await mongoose.connect("mongodb://localhost:27017/devops-rag");

console.log("Connected");

const incident = await Incident.create({
    incident_id: "INC-TEST",
    title: "MongoDB Test Incident",
    service: "Test Service",
    category: "Testing",
    severity: "Low",
    environment: "Development",
    timestamp: new Date(),
    description: "Testing MongoDB connection",
    symptoms: [],
    logs: [],
    affected_components: [],
    root_cause: "Testing",
    resolution: [],
    preventive_actions: [],
    impact: "No impact",
    status: "Open",
    resolution_time: null,
    keywords: ["test", "mongodb"]
});

console.log(incident);

await mongoose.disconnect();