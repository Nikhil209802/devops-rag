import express from "express";
import incidentRoutes from "./routes/incidents.js";

const app = express();
const PORT = 3000;

app.use("/api/incidents", incidentRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});