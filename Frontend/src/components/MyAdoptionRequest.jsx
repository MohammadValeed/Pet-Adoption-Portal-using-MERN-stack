import React, { useContext } from 'react';
import PetsContext from './PetsContext'; // Import the context
import './MyAdoptionRequest.css';
import Navbar from './Navbar';
import Footer from './Footer';

const MyAdoptionRequest = () => {
  const { myAdoptionRequests, acceptAdoptionRequest, rejectAdoptionRequest, deleteAdoptionRequest } = useContext(PetsContext);

  const handleAccept = (requestId) => {
    acceptAdoptionRequest(requestId);
  };

  const handleReject = (requestId) => {
    rejectAdoptionRequest(requestId);
  };

  const handleDelete = (requestId) => {
    deleteAdoptionRequest(requestId);
  };

  return (
    <div className="adoption-request-page">
      <Navbar />
      <br /><br /><br />
      <div className="adoption-request-container">
        <h2 className="adoption-request-title">TOTAL MY ADOPTION REQUEST : {myAdoptionRequests?.length || 0}</h2>
        <table className="adoption-request-table">
          <thead>
            <tr className="table-header">
              <th> Name</th>
              <th> Email</th>
              <th> Phone</th>
              <th> Location</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {myAdoptionRequests?.map((row) => (
              <tr key={row.id}>
                <td>{row.requesterName}</td> {/* Use row instead of request */}
                <td>{row.requesterEmail}</td> {/* Use row instead of request */}
                <td>{row.requesterPhone}</td> {/* Use row instead of request */}
                <td>{row.requesterAddress}</td> {/* Use row instead of request */}
                
                <td>
                  {row.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {!myAdoptionRequests && <p>No adoption requests found.</p>}
      </div>
      <Footer />
    </div>
  );
};

export default MyAdoptionRequest;