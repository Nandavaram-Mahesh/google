import { SearchIcon } from '@heroicons/react/outline'
import { MicrophoneIcon, XIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useRef } from 'react'
import Avatar from './Avatar'
import HeaderOptions from './HeaderOptions'

const Header = () => {
    const router = useRouter()
    const searchInputRef = useRef(null)
    const search=(e)=>{
        e.preventDefault()

        const term = searchInputRef.current.value

        if(!term) return;

        router.push(`/search?term=${term}`)
    }
  return (
    <header className='sticky top-0 bg-white'>
        <div className='flex w-full p-3 sm:p-6 items-center'>
            <Image
            src='https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' 
            height={40}
            width={120}
            alt='Google Logo'
            onClick={()=>router.push('/')}
            className='cursor-pointer'
            />
            <form className='flex flex-grow border border-gray-300 shadow-lg max-w-3xl  rounded-full px-3 py-0.5 sm:px-6 sm:py-3 ml-5 mr-3 sm:ml-10 sm:mr-5 '>
                <input type="text" ref={searchInputRef} className='flex-grow w-full focus:outline-none rounded-full'/>
                <XIcon onClick={()=>(searchInputRef.current.value="")} className='h-7 text-gray-500 cursor-pointer transition duration-100 transform  sm:hover:scale-125 sm:mr-3'/>
                <MicrophoneIcon className='h-6 mr-6 hidden sm:inline-flex text-blue-500 cursor-pointer border-l-2 pl-4 border-gray-400'/>
                <SearchIcon className='h-6  hidden sm:inline-flex text-blue-500 cursor-pointer '/>
                <button hidden type='submit' onClick={search}>search</button>
            </form>
            <Avatar className='ml-auto' url='https://icon-library.com/images/avatar-icon/avatar-icon-4.jpg'/>
        </div>
        {/* Header options */}
        <HeaderOptions/>
    </header>
  )
}

export default Header