import React from "react";

const Navbar = () => {
    return (
        <nav style={{ padding: "10px", background: "#222", color: "#fff", display: "flex", justifyContent: "space-between" }}>
            <h2>Virtual Event Planner</h2>
            <div>
                <a href="#home" style={{ margin: "0 10px", color: "#fff" }}>Home</a>
                <a href="#services" style={{ margin: "0 10px", color: "#fff" }}>Services</a>
                <a href="#experience" style={{ margin: "0 10px", color: "#fff" }}>Past Events</a>
                <a href="#contact" style={{ margin: "0 10px", color: "#fff" }}>Contact</a>
            </div>
        </nav>
    );
};

export default Navbar;
