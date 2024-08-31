import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PetsContext } from './PetsContext';
import Navbar from './Navbar';
import Footer from './Footer';
import './AdoptionRequestForm.css';
import axios from 'axios';
import { v4 } from 'uuid';

const AdoptionRequestForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });
  const { petId } = useParams();
  const navigate = useNavigate();
  const { pets, editPet, user } = useContext(PetsContext); // Assuming user is available in PetsContext
  console.log(user)
  useEffect(() => {
    const petIndex = pets.findIndex(pet => pet.id === petId);
    if (petIndex !== -1) {
      const updatedPet = { ...pets[petIndex], status: 'Pending Adoption' };
      editPet(petIndex, updatedPet);
    }
  }, [petId, pets, editPet]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const newpetId = pets.find(obj => obj._id === petId)
  //   console.log(newpetId.userID)
  //   console.log(user.id)
  //   console.log({ ...formData, petId, PetAddedId: newpetId.userID, userId: user.id })
  //   try {
  //     const response = await fetch('http://localhost:3001/submit-adoption-request', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ ...formData, petId, PetAddedId: pets.userId, userID: user.id }), // Include userId in the request body
  //     });
  //     if (response.ok) {
  //       const data = await response.json();
  //       console.log('Adoption request submitted:', data);
  //       navigate('/');
  //     } else {
  //       console.error('Failed to submit adoption request');
  //     }
  //   } catch (error) {
  //     console.error('Error submitting adoption request:', error);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault()
        const newpetId = pets.find(obj => obj.pet_id === petId)
    const data = {
      ...formData,
      petId,
      PetAddedId: newpetId.userID,
      userId: user.id,
      requestId : v4(),
    }
    console.log(data)
    await axios.post("http://localhost:3001/submit-adoption-request", data)
      .then(res => {
        console.log(res.data)
        navigate("/")
      }).catch(e => {
        console.log(e)
      })
  }

  return (
    <div>
      <Navbar />
      <br /><br /><br /><br /><br />
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Your name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Your phone number</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="your phone number"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Your address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="your address"
              required
            />
          </div>
          <button type="submit" className="submit-button">Submit Adoption Request</button>
        </form>
        <button className="close-button" onClick={() => navigate('/')}>✖ Close</button>
      </div>
      <br /><br />
      <Footer />
    </div>
  );
};

export default AdoptionRequestForm;