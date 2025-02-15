import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetter'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>At SaibyFashion, we believe that style is more than just clothing—it's a reflection of individuality and confidence. Our brand is dedicated to curating timeless and contemporary fashion pieces that cater to diverse tastes and personalities.</p>
          <p>Forever was founded with a vision to curate products that seamlessly combine functionality, design, and sustainability. Born out of a passion for high-quality craftsmanship and a love for design, we’re on a mission to change the way you interact with everyday products.</p>
          <p>Join us on our journey to redefine elegance and celebrate the art of self-expression. Welcome to the world of SaibyFashion—where style meets you!</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>At SaibyFashion, our mission is to inspire confidence and self-expression by delivering high-quality, affordable, and trend-forward fashion. We are committed to empowering individuals through innovative designs, sustainable practices, and exceptional customer experiences.By embracing diversity and creativity, we strive to become a trusted global fashion brand that connects people with the styles they love while making a positive impact on the world.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>SaibyFashion, we are dedicated to delivering products of the highest quality, ensuring exceptional craftsmanship and durability. Our rigorous quality assurance process guarantees that every item meets industry standards. We strive for excellence, offering products that exceed expectations with every purchase.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>SaibyFashion, we prioritize your convenience by offering easy-to-navigate online shopping, fast and reliable delivery, and seamless customer support. Our goal is to make your shopping experience effortless, from browsing to checkout. Enjoy the convenience of quality products delivered straight to your door.
            
          </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600' >SaibyFashion, we prioritize customer satisfaction by offering prompt and personalized assistance. Our team is always ready to address your concerns and ensure a smooth shopping experience. We are committed to going the extra mile to make every customer feel valued and supported.</p>
        </div>
      </div>

      <NewsLetterBox />

    </div>
  )
}

export default About
