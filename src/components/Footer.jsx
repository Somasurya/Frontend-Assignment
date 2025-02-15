import React from 'react'
import { assets } from '../assets/assets'

const Fotter = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
          <img src={assets.logo} className='mb-5 w-32' alt="" />
          <p className='w-full md:w-2/3 text-gray-600'>SaiByFashion is your go-to shopping app for top-quality products and unbeatable deals. With a user-friendly interface, seamless navigation, and a wide range of categories, we make shopping effortless and enjoyable. From trendy fashion to everyday essentials, SaibyFashion offers something for everyone, all backed by reliable service, secure payments, and fast delivery. Download the app today and experience shopping redefined!
          </p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>+91 8608998527</li>
            <li>contact@SaibyFashion.com</li>

          </ul>
        </div>

      </div>
      <hr />
      <p className='py-5 text-sm text-center'>Copyright2024@forever.com - All Right Reseverd</p>
      <div >

      </div>
    </div>
  )
}

export default Fotter
