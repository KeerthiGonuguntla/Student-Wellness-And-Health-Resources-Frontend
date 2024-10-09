import React from 'react';
import './StudentContent.css'; 
import wellness from '../assests/images/wellness.jpg';
import wellness1 from '../assests/images/wellness1.jpg';
import wellness2 from '../assests/images/wellness2.jpg';
import wellness3 from '../assests/images/wellness3.jpg';
import wellness4 from '../assests/images/wellness4.jpg';

function StudentContent() {
  return (
   
    <div className="student-content">
    <h1>Explore Our Services</h1>
    <nav className="scroll-nav">
      <ul>
        <li><a href="#wellness">Health and Wellness</a></li>
        <li><a href="#support">Support Services</a></li>
      </ul>
    </nav>
    <div className="student-content">
      <h1>Explore Our Services</h1>
      <h1>Wellness programs</h1>

      <div className="services-container">
        
        <div className="service-box">
          <img src={wellness} alt="Health and Wellness" className="service-image" />
          <h2>MentalHealthSupport</h2>
          <p>Explore various resources and programs designed to enhance your physical and mental well-being.</p>
          <button className="learn-more-button">Learn More</button>
        </div>
       

        <div className="service-box">
          <img src={wellness1} alt="Health and Wellness" className="service-image" />
          <h2>FitnessPrograms</h2>
          <p>Find support services including counseling, academic help, and wellness workshops.</p>
          <button className="learn-more-button">Learn More</button>
        </div>
        <div className="services-container">
       
        <div className="service-box">
          <img src={wellness2} alt="Health and Wellness" className="service-image" />
          <h2>NutritionAdvice</h2>
          <p>Helps students make informed decisions about their diet, offering guidance on balanced meals and healthy eating habits for better physical and mental well-being.</p>
          <button className="learn-more-button">Learn More</button>
        </div>
      </div>
    </div>



    <div className="services-container">
        
    <h1>Support Services</h1>
      
        <div className="service-box">
          <img src={wellness3} alt="Academic Support" className="service-image" />
          <h2>Academic Support</h2>
          <p>Offers assistance with academic challenges, helping students develop effective study habits, time management skills, and strategies to improve academic performance.</p>
          <button className="learn-more-button">Learn More</button>
        </div>
        </div>
        <div className="services-container">
       
        <div className="service-box">
          <img src={wellness4} alt="Counselling" className="service-image" />
          <h2>Counselling</h2>
          <p>Provides professional support for students dealing with personal, emotional, or academic issues. Counseling helps students navigate challenges and improve their mental resilience.
          </p>
          <button className="learn-more-button">Learn More</button>
        </div>
        </div>
    </div>
    </div>
    
  );
}
<footer className="footer">
  <p>&copy; 2024 Student Health and Wellness. All rights reserved.</p>
</footer>


export default StudentContent;
