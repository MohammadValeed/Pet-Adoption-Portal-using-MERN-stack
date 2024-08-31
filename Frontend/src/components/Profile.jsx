import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css';
import Navbar from './Navbar';
import Footer from './Footer';

const Profile = () => {
  const [profileData, setProfileData] = useState({
    name: '',
    age: '',
    address: '',
    email: '',
    phoneNumber: '',
    profilePic: '',
    profilePicPreview: '',
  });
  const [message, setMessage] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const navigate = useNavigate(); // Import useNavigate to handle redirection

  useEffect(() => {
    const storedProfileData = localStorage.getItem('profileData');
    if (storedProfileData) {
      setProfileData(JSON.parse(storedProfileData));
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    // Simulate saving process
    setTimeout(() => {
      localStorage.setItem('profileData', JSON.stringify(profileData));
      setMessage('Profile updated successfully!');
      setIsSaving(false);
      setTimeout(() => setMessage(''), 3000);
    }, 1000); // Simulate a 1-second save delay
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileData((prevData) => ({
        ...prevData,
        profilePic: URL.createObjectURL(file),
        profilePicPreview: URL.createObjectURL(file),
      }));
    }
  };

  // Add this function to handle logout

  return (
    <div>
      <Navbar />
      <div className="profile-form-container">
        <h2>Update Profile</h2>
        {message && <div className="alert-message">{message}</div>}
        <form>
          <table>
            <tbody>
              <tr>
                <td>Profile Picture:</td>
                <td>
                  <input type="file" name="profilePic" onChange={handleProfilePicChange} />
                  {profileData.profilePicPreview && (
                    <img src={profileData.profilePicPreview} alt="Profile Preview" className="profile-pic-preview" />
                  )}
                </td>
              </tr>
              <tr>
                <td>Name:</td>
                <td>
                  <input type="text" name="name" value={profileData.name} onChange={handleChange} />
                </td>
              </tr>
              <tr>
                <td>Age:</td>
                <td>
                  <input type="number" name="age" value={profileData.age} onChange={handleChange} />
                </td>
              </tr>
              <tr>
                <td>Address:</td>
                <td>
                  <input type="text" name="address" value={profileData.address} onChange={handleChange} />
                </td>
              </tr>
              <tr>
                <td>Email:</td>
                <td>
                  <input type="email" name="email" value={profileData.email} onChange={handleChange} />
                </td>
              </tr>
              <tr>
                <td>Phone Number:</td>
                <td>
                  <input type="tel" name="phoneNumber" value={profileData.phoneNumber} onChange={handleChange} />
                </td>
              </tr>
            </tbody>
          </table>
        </form>
        <button type="button" onClick={handleSubmit} className={isSaving ? 'saving' : ''}>Save Profile</button>
       
      </div>
      <Footer />
    </div>
  );
};

export default Profile;