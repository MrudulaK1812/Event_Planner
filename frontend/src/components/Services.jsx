import React from "react";

function Services() {
    return (
        <section id="services" style={{ padding: "50px", textAlign: "center" }}>
            <h2>Our Services</h2>

            <div className="service-item">
                <h3>Corporate Webinars</h3>
                <p>We offer high-quality corporate webinars that help professionals stay updated with industry trends, skill development, and expert insights.</p>
            </div>

            <div className="service-item">
                <h3>Tech Conferences</h3>
                <p>Our tech conferences bring together thought leaders, developers, and innovators to discuss emerging technologies, share knowledge, and network.</p>
            </div>

            <div className="service-item">
                <h3>Virtual Networking Events</h3>
                <p>We host engaging virtual networking events that connect professionals, entrepreneurs, and industry experts for collaboration and opportunities.</p>
            </div>
        </section>
    );
}

export default Services;
