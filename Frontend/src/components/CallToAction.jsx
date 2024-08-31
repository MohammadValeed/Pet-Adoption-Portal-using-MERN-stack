import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
export default function CallToAction() {
  return (
    <div>
      <Navbar />
      <p className='h-[80px]'></p>
      <div className=" flex flex-col items-center">
      <h1 className='text-3xl text-[#0A303A] font-bold my-5'>Call To Action</h1>
      <p className='mb-8 text-[#727171] lg:w-1/2 w-full'> This is a pets insperational images with text.So that people encourages to adopt pets and give them a better life.</p>
      <figure><img src="https://img.freepik.com/free-photo/woman-holding-adopt-me-sign-while-sitting-cute-dogs_23-2148682972.jpg?t=st=1718467736~exp=1718471336~hmac=52490149927b6498f46d488223abc88baf944556d811d3b167d63fba54e288bd&w=500" alt="Shoes" /></figure><p className='h-[40px]'></p>
      <figure><img src="https://img.freepik.com/free-psd/adopt-pet-square-flyer-style_23-2148544455.jpg?t=st=1718467867~exp=1718471467~hmac=58a3835fa278e8201d4833b7f45d3ed2f24a31b76d0fcdab80e1af9c38928a95&w=500" alt="Shoes" /></figure><p className='h-[50px]'></p>
      <figure><img src="https://img.freepik.com/free-vector/cat-vs-dog-welcome-meme_23-2149001083.jpg?t=st=1718467557~exp=1718471157~hmac=704b3e6ad76c15cf545679fa73a69a10e66613de31ef66db7af6a96a355fb646&w=500" alt="Shoes" /></figure>
      <p className='h-[30px]'></p></div>
      
      <Footer />

    </div>
  )
}
