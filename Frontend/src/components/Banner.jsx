import React from 'react'
import './Banner.css'

export default function Banner() {
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto '>
                <div className='banner-added'>
                    <div className='flex items-center lg:h-[700px] h-[550px] lg:pl-20 pl-5'>
                        <div>
                            <h1 className='lg:text-3xl md:text-2xl text-xl text-white font-extrabold'>
                               Welcome To
                            </h1>
                            <p className='lg:text-5xl md:text-2xl text-xl text-white font-extrabold lg:my-3 align-middle'>
                                <span className='text-[#ef233c]'>pet adoption</span> platform
                            </p>
                            <p className='lg:text-5xl md:text-2xl text-xl text-white font-extrabold'>
                                In the world
                            </p>
                            <p className='text-[#ffffffc9] lg: w-full text-left mt-5'>
                                Welcome to our Pet adopt platform, where tails wag and hearts connect.
                                Discover a sanctuary for love and companionship. Our pet adoption
                                platform is dedicated to uniting families with furry friends. Browse,
                                adopt, and embark on a journey of joy, one pawprint at a time. Your
                                new adventure begins here!
                            </p>
                            <button className='text-white bg-[#ef233c] lg:px-8 lg:py-2 px-4 py-2 lg:mt-10 mt-5 font-bold lg:text-lg text-md items-center'>
                                Explore Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
                <p className='h-[50px]'></p>
            <h3 className="text-[#ef233c] font-semibold text-md h-[25px] text-5xl">About Us</h3>
            <p className='h-[30px]'></p>
            <h5 className="lg:text-3xl text-3xl dark:text-white font-bold my-3 lg:w-[100%]">Welcome to Our Pet Adoption Community. Discover the Joy of Rescuing a Furry Friend and Join Us in Building Forever Bonds with Loving Companions.</h5>
            
            <p className='h-[15px]'></p><p className="text-[#737373] dark:text-[#ffffffa1] text-xl font-normal lg:w-[100%]">
              
            Welcome to  Pet Adoption Website, where love finds a furry friend and homes are filled with joy. Our platform is dedicated to connecting loving individuals with pets in need of a forever home. At Your Website Name, we believe in the transformative power of adoption, fostering meaningful connections between people and their new animal companions. Our user-friendly interface showcases adorable pets ready to join your family.
            </p><p className='h-[15px]'></p>
            <p className="text-[#737373] dark:text-[#ffffffa1] font-normal  text-xl my-3 lg:w-[100%]">
            Each adoption contributes to the broader mission of promoting responsible pet ownership and ensuring the well-being of animals. Explore our comprehensive profiles, featuring heartwarming stories and captivating images, and embark on a journey of companionship. Join us in making a difference—one paw at a time. Together, let's create homes filled with love and wagging tails
            </p>
            <p className='h-[15px]'></p>
            <button className="bg-[#ef233c] text-white px-4 py-2 rounded-md font-semibold">Get More Info</button>
            <p className='h-[35px]'></p>
          </div>
        </>
    )
}
