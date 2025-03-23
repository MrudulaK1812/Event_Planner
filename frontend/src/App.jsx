import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import PastExperience from "./components/PastExperience";
import ImageSlider from "./components/ImageSlider";
import Contact from "./components/Contact";
import BookingForm from "./components/BookingForm"; // Import the Booking Form

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <PastExperience />
      <ImageSlider />
      <BookingForm /> {/* Ensure this is added */}
      <Contact />
    </>
  );
}

export default App;
