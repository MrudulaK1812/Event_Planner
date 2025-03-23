import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

// Load environment variables
dotenv.config();

// Initialize Express App
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection (Without useNewUrlParser and useUnifiedTopology)
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB Connected Successfully");
    } catch (error) {
        console.error("MongoDB Connection Failed:", error.message);
        process.exit(1);
    }
};
connectDB();

// Booking Schema & Model
const bookingSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    eventType: { type: String, required: true },
    date: { type: String, required: true },
    guests: { type: Number, required: true },
    notes: { type: String },
}, { timestamps: true });

const Booking = mongoose.model("Booking", bookingSchema);

// API Routes
app.post("/api/bookings", async (req, res) => {
    try {
        const newBooking = new Booking(req.body);
        await newBooking.save();
        res.status(201).json({ message: "Booking saved successfully!", data: newBooking });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
});

// Get all bookings
app.get("/api/bookings", async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({ message: "Error fetching bookings", error: error.message });
    }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
