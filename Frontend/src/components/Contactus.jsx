import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import './Contactus.css'

export default function Contactus() {
  return (
    <div>
      <Navbar></Navbar>
      <div className='max-w-screen-2xl container mx-auto '>
        <div className='banner'>
          <div className='flex items-center lg:h-[700px] h-[550px] lg:pl-20 pl-5'>
            <div>
              <h1 className='lg:text-4xl md:text-2xl text-lg text-white font-extrabold'>
                <br/>Contact Us
              </h1>
              <p className='lg:text-5xl md:text-2xl text-xl text-white font-extrabold lg:my-3'>
                <span className='text-[#ef233c]'>Petzee  </span>Pet Adoption Portal
              </p>
              <p className='h-[15px]'></p>
              <p className='text-[#ffffffc9] lg:w-1/2 w-full text-left mt-5'>
                Thank you for visiting our pet adoption portal. If you have any questions or feedback, please feel free to reach out to us.
              </p>
              <p className='h-[15px]'></p>
              <h1 className='text-3xl font-bold text-white'>Our Team</h1><br/>
              <ul className='text-white  font-bold'>
                <li>Team Name: Petzee</li><br/>
                <li>Team Members : Pruthvi CP , Preethi HV , Punyashree TK , Mohammad Valeed</li><br/>
                <li>Ph.No: 2012314115</li><br/>
                <li>Email: petzee@example.com</li><br/>
                <li>LinkedIn: <a href="https://www.linkedin.com/petzee">Petzee</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <p className='h-[15px]'></p>
      <Footer />
    </div>
  )
}
