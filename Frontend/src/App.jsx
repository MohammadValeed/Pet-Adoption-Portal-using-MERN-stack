import React from 'react'
import Home from './components/Home/Home'
import Petlisting from './components/Petlisting'
// App.js or your main entry point
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contactus from './components/Contactus';
import Blog from './components/Blog';
import CallToAction from './components/CallToAction';
import Signup from './components/Signup';
import Signin from './components/Login';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import PetAddingForm from './components/AddPet';
import MyAddedPets from './components/MyAddedPets';
import { PetsProvider } from './components/PetsContext';
import UserAdoptionRequest from './components/UserAdoptionRequest';
import MyAdoptionRequest from './components/MyAdoptionRequest';
import AdoptionRequestForm from './components/AdoptionRequestForm';

function App() {
  return (
    <PetsProvider>
      <Router>
        <Routes>
          {/* Define your routes here */}
          <Route path="/" element={<Home />} />
          <Route path="/Petlisting" element={<Petlisting />} />
          <Route path="/Contactus" element={<Contactus />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/CallToAction" element={<CallToAction />} />
          <Route path='/register' element={<Signup />}></Route>
          <Route path='/login' element={<Signin />}></Route>
          <Route path='/Dashboard' element={<Dashboard />}></Route>
          <Route path='/Profile' element={<Profile />}></Route>
          <Route path='/add-pet' element={<PetAddingForm />}></Route>
          <Route path='/my-pets' element={<MyAddedPets />}></Route>
          <Route path='/user-adoption-requests' element={<UserAdoptionRequest/>}></Route>
          <Route path='/my-adoption-request' element={<MyAdoptionRequest/>}></Route>
          <Route path="/adoption-request/:petId" element={<AdoptionRequestForm/>} />
        </Routes>
      </Router>
    </PetsProvider>

  );
}


export default App
