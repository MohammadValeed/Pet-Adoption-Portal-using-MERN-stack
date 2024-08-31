import React, { useState, useEffect, useContext } from 'react';
import './UserAdoptionRequest.css';
import Navbar from './Navbar';
import Footer from './Footer';
import PetsContext from './PetsContext';
import axios from 'axios';

const UserAdoptionRequest = () => {
  const [data, setData] = useState([]);
  const { user } = useContext(PetsContext)
  // useEffect(() => {
  //   fetch('http://localhost:3001/get-adoption-requests')
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! status: ${response.status}`);
  //       }
  //       return response.json();
  //     })
  //     .then(requests => {
  //       console.log(requests)
  //       setData(requests)
  //     })
  //     .catch(error => console.error('Error fetching adoption requests:', error));
  // }, []);

  const fetchdata = async () => {
    await axios.post("http://localhost:3001/get-adoption-requests", {
      userId: user.id
    }).then(res => {
      console.log(res)
      setData(res.data)
    }).catch(e => {
      console.log("server error ", e)
    })
  }

  useEffect(() => {

    fetchdata()
  }, [])

  const handleAcceptRequest = async (requestId) => {
    await axios.post("http://localhost:3001/change-status", {
      requestId, status: "Accept"
    }).then(res => {
      console.log(res)
      fetchdata()
    }).catch(e => {
      console.log(e)
    })
  }

  const handleDeleteRequest = async (requestId) => {
    await axios.post("http://localhost:3001/change-status", {
      requestId, status: "Reject"
    }).then(res => {
      console.log(res)
      fetchdata()
    }).catch(e => {
      console.log(e)
    })
  }


  return (
    <>
      <Navbar />
      <br /><br /><br /><br /><br />
      <div className="App">
        <h2 className='text-2xl'>TOTAL USER ADOPTION REQUEST : {data.length}</h2>
        <br /><br />
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>REQUESTER NAME</th>
                <th>REQUESTER EMAIL</th>
                <th>REQUESTER PHONE NUMBER</th>
                <th>REQUESTER LOCATION</th>
                <th>PET ID</th>
                <th>REQUEST</th>
                <th>REJECT</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index}>
                  <td>{row.requesterName}</td>
                  <td>{row.requesterEmail}</td>
                  <td>{row.requesterPhone}</td>
                  <td>{row.requesterAddress}</td>
                  <td>{row.petID}</td>
                  <td><button className="accept-btn" onClick={(e) => handleAcceptRequest(row.requestId)}>Accept</button></td>
                  <td><button className="reject-btn" onClick={() => handleDeleteRequest(row.requestId)}>Reject</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <br /><br /><br />
      <Footer />
    </>
  );
};

export default UserAdoptionRequest;