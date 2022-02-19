import Image from 'next/image'
import React from 'react'

const Avatar = ({url,className}) => {
  return (
    <Image 
    src={url}
    alt="profilePicture"
    className={`h-10 transition duration-100 transform hover:scale-110 ${className}`}
    />

    
  )
}

export default Avatar