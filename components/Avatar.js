import Image from 'next/image'
import React from 'react'

const Avatar = ({url,className}) => {
  return (
    <Image 
    src={url}
    width={50}
    height={50}
    alt="profilePicture"
    className={` transition duration-100 transform hover:scale-110 ${className}`}
    />

    
  )
}

export default Avatar