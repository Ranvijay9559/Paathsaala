import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';
import Testimonial from '../../components/testimonials/Testimonial';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="home-hero">
        <div className="overlay">
          <div className="home-content">
            <h1>Empower Your Future with <span>Paathsaala</span></h1>
            <p>Discover top-notch courses and unlock your potential — anytime, anywhere.</p>
            <button onClick={() => navigate("/courses")} className="common-btn">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <Testimonial />
    </div>
  );
};

export default Home;
