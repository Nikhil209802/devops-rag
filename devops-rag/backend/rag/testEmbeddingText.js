import { connectDB } from "../config/db.js";
import Incident from "../models/Incident.js";
import { createEmbeddingText } from "./embeddingText.js";

await connectDB();

const incident = await Incident.findOne();

if (!incident) {
    console.log("No incident found");
    process.exit(1);
}

const text = createEmbeddingText(incident);

console.log(text);

process.exit(0);