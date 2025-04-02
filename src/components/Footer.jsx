import React from 'react'

const Footer = () => {
  return (
    <div className=' mt-20 md:mt-40'>
         <div className="relative mt-8 py-4 text-center text-white text-sm border-t border-gray-500 pt-4">
        © {new Date().getFullYear()} Karthik. All rights reserved.
      </div>
    </div>
  )
}

export default Footer