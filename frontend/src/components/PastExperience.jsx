import React from "react";

function PastExperience() {
    return (
        <section id="experience" className="past-experience">
            <h2>Past Events</h2>
            <div className="experience-content">
                {/* Image Section */}
                <div className="experience-image">
                    {/* Image path from the public/assets folder */}
                    <img src="/assets/corporate.jpeg" alt="Past Events" />
                </div>

                {/* Text Content */}
                <div className="experience-text">
                    <p>Over time, I have gained hands-on experience in event management, hosting, and volunteering at various tech events.</p>
                    <ul>
                        <li><strong>GDG Pune Events:</strong> Volunteered & anchored multiple sessions, engaging with industry experts and technical communities.</li>
                        <li><strong>College Tech Events:</strong> Led and organized hackathons, coding competitions, and speaker sessions, ensuring seamless execution.</li>
                        <li><strong>Industry Webinars:</strong> Assisted in managing and moderating online webinars, handling audience interaction and Q&A sessions.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default PastExperience;
