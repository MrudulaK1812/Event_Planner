import React from "react";

function Contact() {
    return (
        <section id="contact" style={{ padding: "50px", textAlign: "center" }}>
            <h2>Contact Us</h2>
            <p>Email: <a href="mailto:mru181203@gmail.com">mru181203@gmail.com</a></p>
            <p>
                LinkedIn:{" "}
                <a
                    href="https://www.linkedin.com/in/mrudula-kulkarni-3baa9522a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#0077b5", textDecoration: "none", fontWeight: "bold" }}
                >
                    Visit My LinkedIn
                </a>
            </p>
        </section>
    );
}

export default Contact;
