import React, { useState } from "react";

function BookingForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        eventType: "",
        date: "",
        guests: "",
        notes: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        await fetch("http://localhost:5000/api/bookings", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        setLoading(false);
    };

    return (
        <section className="booking-section">
            <form onSubmit={handleSubmit} className="booking-form">
                <h2>Book a Free Consultation</h2>
                <input type="text" name="name" placeholder="Your Name" onChange={handleChange} required />
                <input type="email" name="email" placeholder="Your Email" onChange={handleChange} required />
                <input type="tel" name="phone" placeholder="Your Phone" pattern="[0-9]{10}" onChange={handleChange} required />
                <input type="text" name="eventType" placeholder="Event Type" onChange={handleChange} required />
                <input type="date" name="date" onChange={handleChange} required />
                <input type="number" name="guests" placeholder="Number of Guests" min="1" onChange={handleChange} required />
                <textarea name="notes" placeholder="Additional Notes" onChange={handleChange}></textarea>
                <button type="submit" disabled={loading}>{loading ? "Submitting..." : "Submit"}</button>
            </form>

            <div className="booking-description">
                <h2>Why Book a Consultation?</h2>
                <p>Our experts are here to help you plan your perfect event. Whether it's a corporate event, or webinar, we offer personalized advice to ensure a memorable experience.</p>
                <p>Get in touch with us today and let's make your vision a reality!</p>
            </div>
        </section>
    );
}

export default BookingForm;
