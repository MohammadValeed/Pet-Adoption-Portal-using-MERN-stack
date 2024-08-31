import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create the context
export const PetsContext = createContext();

// Provider component
export const PetsProvider = ({ children }) => {
  const [pets, setPets] = useState([]);
  const [adoptionRequests, setAdoptionRequests] = useState([]);
  const [myAdoptionRequests, setMyAdoptionRequests] = useState([]);
  const userEmail = localStorage.getItem('userEmail'); // Get logged-in user's email
  const [user, setUser] = useState({
    name: "",
    email: "",
    id: ""
  });

  const UpdateUserInfo = (data) => {
    if (data) {
      setUser({
        name: data.name || "",
        email: data.email || "",
        id: data.id || ""
      });
    } else {
      // Handle the case where data is null or undefined
      console.error("User data is null or undefined.");
    }
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user"));
    console.log(data);
    if (data) {
      UpdateUserInfo(data);
    } else {
      console.error("User data in localStorage is null or undefined.");
    }
  }, []);

  const fetchPets = async () => {
    try {
      const response = await axios.get("http://localhost:3001/get-pets");
      setPets(response.data);
      console.log(response.data)
    } catch (error) {
      console.error('Error fetching pets:', error);
    }
  };

  const fetchAdoptionRequests = async () => {
    try {
      const response = await axios.post("http://localhost:3001/get-adoption-requests",{
        userId : user.id
      });
      setAdoptionRequests(response.data);
    } catch (error) {
      console.error('Error fetching adoption requests:', error);
    }
  };

  useEffect(() => {
    fetchPets();
    fetchAdoptionRequests();
  }, []);

  const addPet = async (formData) => {
    try {
      const response = await axios.post('http://localhost:3001/add-pet', formData);
      setPets([...pets, response.data]);
    } catch (error) {
      console.error('Error adding pet:', error);
    }
  };

  const deletePet = async (petId) => {
    try {
      const response = await axios.delete(`http://localhost:3001/delete-pet/${petId}`);
      if (response.status === 200) {
        setPets(pets.filter(pet => pet._id !== petId));
      } else {
        console.error('Error deleting pet:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting pet:', error);
    }
  };

  const editPet = async (petId, updatedPet) => {
    try {
      const response = await axios.put(`http://localhost:3001/update-pet/${petId}`, updatedPet);
      if (response.status === 200) {
        setPets(pets.map(pet => (pet._id === petId ? response.data : pet)));
      } else {
        console.error('Error updating pet:', response.statusText);
      }
    } catch (error) {
      console.error('Error updating pet:', error);
    }
  };
  useEffect(() => {
    const fetchMyAdoptionRequests = async () => {
      try {
        const response = await axios.post(`http://localhost:3001/get-my-adoption-requests`, {
          userId: user.id
        });
        console.log(response)
        setMyAdoptionRequests(response.data);
      } catch (error) {
        console.error('Error fetching my adoption requests:', error);
      }
    };

    if (user.id) {
      fetchMyAdoptionRequests();
    }
  }, [user.id]);

  const submitAdoptionRequest = async (formData) => {
    try {
      const response = await axios.post('http://localhost:3001/submit-adoption-request', formData);
      if (response.status === 200) {
        setAdoptionRequests([...adoptionRequests, response.data]);
      } else {
        console.error('Error submitting adoption request:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting adoption request:', error);
    }
  };

  const acceptAdoptionRequest = async (requestId) => {
    try {
      const response = await axios.post(`http://localhost:3001/accept-adoption-request/${requestId}`);
      if (response.status === 200) {
        // Update the state or perform other actions after accepting the request
      } else {
        console.error('Error accepting adoption request:', response.statusText);
      }
    } catch (error) {
      console.error('Error accepting adoption request:', error);
    }
  };

  const rejectAdoptionRequest = async (requestId) => {
    try {
      const response = await axios.post(`http://localhost:3001/reject-adoption-request/${requestId}`);
      if (response.status === 200) {
        // Update the state or perform other actions after rejecting the request
      } else {
        console.error('Error rejecting adoption request:', response.statusText);
      }
    } catch (error) {
      console.error('Error rejecting adoption request:', error);
    }
  };

  const deleteAdoptionRequest = async (requestId) => {
    try {
      const response = await axios.delete(`http://localhost:3001/delete-adoption-request/${requestId}`);
      if (response.status === 200) {
        setAdoptionRequests(adoptionRequests.filter(request => request._id !== requestId));
      } else {
        console.error('Error deleting adoption request:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting adoption request:', error);
    }
  };

  return (
    <PetsContext.Provider value={{
      user,
      UpdateUserInfo,
      pets,
      adoptionRequests,
      addPet,
      deletePet,
      editPet,
      fetchPets,
      myAdoptionRequests,
      submitAdoptionRequest,
      acceptAdoptionRequest,
      rejectAdoptionRequest,
      deleteAdoptionRequest
    }}>
      {children}
    </PetsContext.Provider>
  );
};

export default PetsContext;