// Dashboard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import './Dashboard.css'; // Import your CSS file for styling

function Dashboard() {
  return (
    <>
    <Navbar/>
    <div className="dashboard-container text-xl">
      <h1 className="dashboard-title text-5xl text-red-500 font-bold">Pet Adoption Dashboard</h1>
      <br/>
      <br/>

      <nav>
        <ul className="dashboard-links">
          <li className="dashboard-link-item">
            <Link to="/add-pet">ADD PET</Link>
          </li>
          <li className="dashboard-link-item">
            <Link to="/my-pets">MY ADDED PETS</Link>
          </li>
          <li className="dashboard-link-item">
            <Link to="/user-adoption-requests"> USER ADOPTION REQUESTS</Link>
          </li>
          <li className="dashboard-link-item">
            <Link to="/my-adoption-request">MY ADOPTION REQUESTS</Link>
          </li>
        </ul>
      </nav>
    </div>
    <Footer/>
    </>
    
  );
}

export default Dashboard;
