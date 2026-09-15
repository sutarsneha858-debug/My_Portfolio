import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black py-6 text-center text-gray-400'>
        <div className='container mx-auto px-6'>
            <p>&copy; {new Date().getFullYear()} Created By Sneha Ganesh Sutar. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer
