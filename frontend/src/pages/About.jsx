import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewslatterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>We are dedicated to providing high-quality products that combine style, comfort, and reliability. Our goal is to create a seamless shopping experience where customers can explore a wide range of collections with ease and confidence. From everyday essentials to trending styles, we ensure every product meets our standards of quality and design.</p>
          <p>We believe in customer satisfaction, transparency, and continuous improvement. Our platform is built to offer smooth navigation, secure transactions, and fast service, making online shopping simple and enjoyable for everyone.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Our mission is to deliver value and quality through carefully curated products while building trust with our customers. We strive to innovate, improve user experience, and bring the latest trends to your fingertips, ensuring satisfaction with every purchase.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>We ensure every product meets high standards of quality, durability, and design to give you the best value.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Enjoy a smooth and hassle-free shopping experience with easy navigation, secure checkout, and fast delivery.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Our support team is always ready to assist you, ensuring quick responses and a satisfying shopping experience.</p>
        </div>
      </div>

      <NewslatterBox />

    </div>
  )
}

export default About
