import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Blog() {
    return (
        <>
            < Navbar />
            <p className='h-[80px]'></p>
            <div className='container mx-auto md:px-20 px-4 '>
                <div className=" flex flex-col items-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">From the blog</h2>
          <p className="mt-2  leading-8 text-gray-600 text-2xl">
            Learn how to take care of your Pets.
          </p><p className='h-[20px]'></p>
                    <figure><img src="https://img.freepik.com/premium-photo/smiling-girl-with-dog-using-laptop-drinking-coffee_643934-5882.jpg?w=600" alt="Shoes" /></figure>
                    <div className="">
                        <p className='h-[30px]'></p>
                        <h2 className="flex flex-col items-center text-2xl font-bold">Do Dogs Have a Sense of Time?</h2>
                        <p className='h-[25px]'></p>
                        <p className='flex flex-col items-center md:px-20 px-4 '>Dogs have a sense of time but don’t understand the ‘concept’ of time. Unlike humans, dogs don’t have the ability to create actual measures of time, like the second, hour, and minute, and they don’t know how to read clocks. So, telling them ”I’ll be back in 15 minutes” won’t really do much, but we understand that you feel like you have to do it anyway! Dogs are capable of being trained based on past events, and can be taught to anticipate future events based on past experiences. Pavlov’s dogs are the perfect example of this.</p>
                        <div className="card-actions justify-end">
                        <p className='h-[20px]'></p>
                        </div>
                    </div>
                </div>
                <p className='h-[20px]'></p>
                <div className=" flex flex-col items-center">
                    <figure><img src="https://img.freepik.com/free-photo/influencer-their-pet-creating-content-online-spaces-social-media_23-2151420228.jpg?t=st=1718464968~exp=1718468568~hmac=a29d51ffdd99310d3151695650dd317f6e25712ffaf997dbde127dbf3b627c6e&w=600" alt="Shoes" /></figure>
                    <div className="">
                        <p className='h-[30px]'></p>
                        <h2 className="flex flex-col items-center text-2xl font-bold">Why Should I Feed My Dog More Than Kibble: A Healthy Dog Diet?</h2>
                        <p className='h-[25px]'></p>
                        <p className='flex flex-col items-center md:px-20 px-4 '>There are many campaigns that discourage people from feeding their dogs kibble, and I get it. Ideally we would all (pets included) eat a diet of whole foods without packaged or processed components. For both people and dogs, this can be unrealistic depending on lifestyle and budget. While I would love to see every single one of my patients on a home prepared, fresh whole foods diet, there are so many reasons why a small percentage of my practice eat this way. These reasons include cost, lack of time resources, food allergies and digestive issues. If you are feeding your dog kibble, it’s ok. It really is. We are all doing the best we can.If you want to take your pup’s nutrition to the next level, but you are feeling some level of limitation, I’ve got good news. There are a lot of easy and fun ways to add fresh whole foods to their diet, while not breaking the bank or quitting your day job.</p>
                        <div className="card-actions justify-end">
                            <p className='h-[20px]'></p>
                        </div>
                    </div>
                </div>
                <p className='h-[20px]'></p>
                <div className=" flex flex-col items-center">
                    <figure><img src="https://img.freepik.com/free-photo/woman-sitting-indoors-with-her-cat_23-2148847329.jpg?t=st=1718465632~exp=1718469232~hmac=7143499db49b8059295e07524f73c6019475fe5415b1a25b7f47ff21c2f01508&w=600" alt="Shoes" /></figure>
                    <div className="">
                        <p className='h-[30px]'></p>
                        <h2 className="flex flex-col items-center text-2xl font-bold">Why We Love Treat Meow Squeeze & Thank You Cat Tube Treats?</h2>
                        <p className='h-[25px]'></p>
                        <p className='flex flex-col items-center md:px-20 px-4 '>Introducing Treat Meow Squeeze & Thank You: the tube treats for cats that are delicious AND good for them! Learn more about the benefits of all three vitamin and mineral-boosted flavors.We know from personal experience that our cats go wild for tube treats—the creamy, pureed cat treats that are packaged just like a Go-Gurt. When we decided to make them ourselves, we wanted them to be the best cat squeeze up treats on the market!That’s why we took all the good stuff from other tube treats (like bold flavors and interactive feeding) and added our own, vet-approved spin on the formula with top-notch proteins and vital nutrients to make a treat that can improve your cat’s health.
                        </p>
                        <div className="card-actions justify-end">
                            <p className='h-[20px]'></p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
