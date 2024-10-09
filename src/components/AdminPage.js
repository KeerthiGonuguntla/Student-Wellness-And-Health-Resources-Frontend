import React from 'react';
import './AdminPage.css'; // Import CSS for styling

// Import images for each module
import nutrition from '../assests/images/nutrition.jpeg';
import mentalhealth from '../assests/images/mentalhealth.jpeg';
import fitness from '../assests/images/fitness.jpeg';

function AdminPage() {
 
      // Handler for adding a service
      const handleAddService = () => {
        // Logic to add a service
        alert("Service added!");
      };
    
      // Handler for deleting a service
      const handleDeleteService = () => {
        // Logic to delete a service
        alert("Service deleted!");
      };
      return(
    <div className="admin-page">
      <header className="admin-header">
        <h1>Admin Dashboard: Student Health and Wellness</h1>
      </header>

      <section className="modules">
        <div className="module">
          <img src={nutrition} alt="Nutrition" className="module-image" />
          <div className="module-info">
            <h2>Nutrition</h2>
            <p>Access information about healthy eating, balanced diets, and meal plans for students.</p>
          </div>
        </div>

        <div className="module">
          <img src={mentalhealth} alt="Mental Health" className="module-image" />
          <div className="module-info">
            <h2>Mental Health</h2>
            <p>Find mental health support resources, including counseling services and stress management tools.</p>
          </div>
        </div>

        <div className="module">
          <img src={fitness} alt="Fitness" className="module-image" />
          <div className="module-info">
            <h2>Fitness</h2>
            <p>Explore various fitness programs, workout routines, and physical wellness tips for students.</p>
          </div>
     
        </div>
      </section>

      <section className="admin-content">
            
            <h1>Manage Services</h1>
            <p>Here you can add or delete services related to health and wellness.</p>
            
            {/* Other content related to managing services would go here */}
    
            {/* Buttons for adding and deleting services */}
            <div className="admin-buttons">
              <button className="add-service" onClick={handleAddService}>Add Services</button>
              <button className="delete-service" onClick={handleDeleteService}>Delete Services</button>
            </div>
          </section>
    </div>



  );
}

export default AdminPage;
