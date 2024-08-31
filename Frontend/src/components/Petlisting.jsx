import React, { useContext, useEffect } from 'react';
import { PetsContext } from './PetsContext';
import Navbar from './Navbar';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

const Petlisting = () => {
  const { pets, fetchPets } = useContext(PetsContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetchPets();
  }, [fetchPets]);

  const handleAdopt = (petId) => {
    // Navigate to the AdoptionRequestForm page and pass the petId as a parameter
    navigate(`/adoption-request/${petId}`);
  };

  return (
    <>
      <Navbar />
      <div>
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="text-4xl font-bold tracking-tight text-red-500">Pets available for adoption</h2>
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {pets.length === 0 ? (
                <div className="col-span-full">
                  <p>No pets available for adoption.</p>
                </div>
              ) : (
                pets.map((pet) => (
                  <div key={pet._id} className="group relative">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                      <img
                        src={`http://localhost:3001/uploads/${pet.image}`}
                        alt={`Front of ${pet.name}`}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      />
                    </div>
                    <div className="mt-4">
                      <h3 className="text-sm font-medium text-gray-900">{pet.name}</h3>
                      <p className="mt-1 text-sm text-gray-500">Age: {pet.age}</p>
                      <p className="mt-1 text-sm text-gray-500">Location: {pet.location}</p>
                      <p className="mt-1 text-sm text-gray-500">Owner: {pet.ownerInfo}</p>
                      <p className="mt-1 text-sm text-gray-500">Category: {pet.category}</p>
                      <p className="mt-1 text-sm text-gray-500">{pet.description}</p>
                      {
                        pet.adopted ? <p>Adopted</p> : <button
                          className="mt-4 px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-md hover:bg-blue-600"
                          onClick={() => handleAdopt(pet.pet_id)}
                        >
                          Adopt
                        </button>
                      }
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Petlisting;