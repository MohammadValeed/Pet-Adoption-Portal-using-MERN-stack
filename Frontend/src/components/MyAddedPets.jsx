import React, { useContext, useState, useEffect } from 'react';
import { PetsContext } from './PetsContext';
import Navbar from './Navbar';
import Footer from './Footer';
import './MyAddedPets.css'; // Assuming you have a CSS file for styling
import axios from 'axios';

const MyAddedPets = () => {
  const { deletePet, editPet } = useContext(PetsContext);
  const [editingPet, setEditingPet] = useState(null);
  const [pets, setPets] = useState([])
  const [showEditForm, setShowEditForm] = useState(false);
  // Get logged-in user's email

  const {user} = useContext(PetsContext)

  useEffect(() => {
    console.log(user)
    const fetchPets = async () => {
      try {
        const response = await axios.post('http://localhost:3001/get-pets-by-owner/', {
          id: user.id // Assuming user.id is the correct ID to fetch pets by owner
        });
        setPets(response.data);
      } catch (error) {
        console.error('Error fetching pets:', error);
      }
    };

    fetchPets();
}, [user.id]);

  const handleEditClick = (pet) => {
    setEditingPet(pet);
    setShowEditForm(true);
  };

  const handleDeleteClick = async (petId) => {
    await deletePet(petId);
    setEditingPet(null);
  };

  const handleEditFormSubmit = async (petId) => {
    await editPet(petId, editingPet);
    setEditingPet(null);
    setShowEditForm(false);
  };

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditingPet((prevPet) => ({
      ...prevPet,
      [name]: value,
    }));
  };

  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="container">
        <h1 className='pet'>Total Pets Added: {pets.length}</h1>
        <table className="pet-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Pet Name</th>
              <th>Category</th>
              <th>Edit</th>
              <th>Delete</th>
              <th>Adopted</th>
            </tr>
          </thead>
          <tbody>
            {pets.length === 0 ? (
              <tr>
                <td colSpan="8">No pets added.</td>
              </tr>
            ) : (
              pets.map((pet, index) => (
                <tr key={pet._id}>
                  <td>{index + 1}</td>
                  <td>
                    <img src={`http://localhost:3001/uploads/${pet.image}`} alt={pet.name} style={{ width: '100px', height: 'auto' }} />
                  </td>
                  <td>{pet.name}</td>
                  <td>{pet.category}</td>
                  <td>
                    <button onClick={() => handleEditClick(pet)}>Edit</button>
                  </td>
                  <td>
                    <button onClick={() => handleDeleteClick(pet._id)}>Delete</button>
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      checked={pet.adopted}
                      onChange={() => {
                        const updatedPet = { ...pet, adopted: !pet.adopted };
                        editPet(pet._id, updatedPet);
                      }}
                    />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      {showEditForm && editingPet && (
        <div className="edit-form">
          <h2>Edit Pet Information</h2>
          <form onSubmit={() => handleEditFormSubmit(editingPet._id)}>
            <label htmlFor="editName">Name:</label>
            <input
              type="text"
              id="editName"
              name="name"
              value={editingPet.name}
              onChange={handleEditInputChange}
            />
            <label htmlFor="editAge">Age:</label>
            <input
              type="text"
              id="editAge"
              name="age"
              value={editingPet.age}
              onChange={handleEditInputChange}
            />
            <label htmlFor="editLocation">Location:</label>
            <input
              type="text"
              id="editLocation"
              name="location"
              value={editingPet.location}
              onChange={handleEditInputChange}
            />
            <label htmlFor="editOwnerInfo">Owner Info:</label>
            <input
              type="text"
              id="editOwnerInfo"
              name="ownerInfo"
              value={editingPet.ownerInfo}
              onChange={handleEditInputChange}
            />
            <label htmlFor="editCategory">Category:</label>
            <select
              id="editCategory"
              name="category"
              value={editingPet.category}
              onChange={handleEditInputChange}
            >
              <option value="">Select a category</option>
              <option value="cat">Cat</option>
              <option value="dog">Dog</option>
              <option value="rabbit">Rabbit</option>
              <option value="goat">Goat</option>
            </select>
            <label htmlFor="editDescription">Description:</label>
            <textarea
              id="editDescription"
              name="description"
              value={editingPet.description}
              onChange={handleEditInputChange}
            ></textarea>
            <button type="submit">Save Changes</button>
          </form>
        </div>
      )}
      <br />
      <br />
      <Footer />
    </>
  );
};

export default MyAddedPets;