import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { PetsContext } from './PetsContext';
import Navbar from './Navbar';
import Footer from './Footer';
import './PetAddingForm.css'; // Assuming you have a CSS file for styling
import { v4 } from 'uuid';

function PetAddingForm() {
  const [petName, setPetName] = useState('');
  const [petAge, setPetAge] = useState('');
  const [petLocation, setPetLocation] = useState('');
  const [petOwnerInfo, setPetOwnerInfo] = useState('');
  const [petCategory, setPetCategory] = useState('');
  const [petDescription, setPetDescription] = useState('');
  const [petPicture, setPetPicture] = useState(null);
  const navigate = useNavigate();
  const { addPet, user } = useContext(PetsContext);
  const userEmail = localStorage.getItem('userEmail'); // Get logged-in user's email

  const handlePetNameChange = (e) => {
    setPetName(e.target.value);
  };

  const handlePetAgeChange = (e) => {
    setPetAge(e.target.value);
  };

  const handlePetLocationChange = (e) => {
    setPetLocation(e.target.value);
  };

  const handlePetOwnerInfoChange = (e) => {
    setPetOwnerInfo(e.target.value);
  };

  const handlePetCategoryChange = (e) => {
    setPetCategory(e.target.value);
  };

  const handlePetDescriptionChange = (e) => {
    setPetDescription(e.target.value);
  };

  const handlePetPictureChange = (e) => {
    setPetPicture(e.target.files[0]);
  };

  const handleAddPet = () => {
    const formData = new FormData();
    formData.append('name', petName);
    formData.append('age', petAge);
    formData.append('location', petLocation);
    formData.append('ownerInfo', petOwnerInfo);
    formData.append('category', petCategory);
    formData.append('description', petDescription);
    formData.append('adopted', false);
    formData.append('owner', userEmail); // Add owner field
    formData.append('image', petPicture);
    formData.append("userID", user.id)
    formData.append("pet_id", v4())
    addPet(formData);
    navigate('/my-pets');
  };

  return (
    <div>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <table>
        <caption className='text-2xl text-red-500'>Add a Pet</caption>
        <tbody>
          <tr>
            <td><label htmlFor="petName">Pet Name:</label></td>
            <td><input type="text" id="petName" value={petName} onChange={handlePetNameChange} /></td>
          </tr>
          <tr>
            <td><label htmlFor="petAge">Pet Age:</label></td>
            <td><input type="text" id="petAge" value={petAge} onChange={handlePetAgeChange} /></td>
          </tr>
          <tr>
            <td><label htmlFor="petLocation">Pet Location:</label></td>
            <td><input type="text" id="petLocation" value={petLocation} onChange={handlePetLocationChange} /></td>
          </tr>
          <tr>
            <td><label htmlFor="petOwnerInfo">Pet Owner Info:</label></td>
            <td><input type="text" id="petOwnerInfo" value={petOwnerInfo} onChange={handlePetOwnerInfoChange} /></td>
          </tr>
          <tr>
            <td><label htmlFor="petCategory">Pet Category:</label></td>
            <td>
              <select id="petCategory" value={petCategory} onChange={handlePetCategoryChange}>
                <option value="">Select a category</option>
                <option value="cat">Cat</option>
                <option value="dog">Dog</option>
                <option value="rabbit">Rabbit</option>
                <option value="goat">Goat</option>
              </select>
            </td>
          </tr>
          <tr>
            <td><label htmlFor="petDescription">Pet Description:</label></td>
            <td><textarea id="petDescription" value={petDescription} onChange={handlePetDescriptionChange}></textarea></td>
          </tr>
          <tr>
            <td><label htmlFor="petPicture">Pet Picture:</label></td>
            <td><input type="file" id="petPicture" onChange={handlePetPictureChange} /></td>
          </tr>
          <tr>
            <td></td>
            <td><button type="button" className="btn bg-red-500 text-white" onClick={handleAddPet}>Add Pet</button></td>
          </tr>
        </tbody>
      </table>
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default PetAddingForm;