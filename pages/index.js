import Head from 'next/head'
import {ViewGridIcon,MicrophoneIcon} from'@heroicons/react/solid'
import Avatar from '../components/Avatar'
import Image from 'next/image'
import { SearchIcon } from '@heroicons/react/outline'
import Footer from '../components/Footer'
import { useRef } from 'react'
import { useRouter } from 'next/router'
export default function Home() {
  const router =useRouter()
  const searchInputRef=useRef(null)
  const search = (e)=>{
    e.preventDefault()
    
    const term =searchInputRef.current.value;

    if(!term) return;

    router.push(`/search?term=${term}`);
  }
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <Head>
        <title>Google-clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <header className='flex w-full justify-between p-5 text-sm text-gray-800'>
        {/* Left  */}
        <div className='flex space-x-4 items-center'>
          <p className='link'>About</p>
          <p className='link'>Store</p>
        </div>
        {/* Right */}
        <div className='flex space-x-4 items-center'>
        <p className='link'>Gmail</p>
        <p className='link'>Images</p>
        <ViewGridIcon className='h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer'/>
        <Avatar url='https://icon-library.com/images/avatar-icon/avatar-icon-4.jpg'/>
        </div>
      </header>
      {/* Body */}
      <form className="flex flex-col items-center mt-20 flex-grow w-4/5">
        <Image
          src='https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' 
          height={100}
          width={300}
          alt=''
        />
        <div className='flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl'>
          <SearchIcon className='h-5 mr-3 text-gray-500'/>
          <input type='text' ref={searchInputRef} className='focus:outline-none flex-grow'/>
          <MicrophoneIcon className='h-5'/>
        </div>
        <div className='flex flex-col space-y-4 w-1/2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4'>
        <button className='button' onClick={search}>Google Search</button>
        <button className='button'onClick={search} >I'm Feeling Lucky</button>
        </div>
      </form>
      {/* Footer */}
      <Footer/>
    </div>
  )
}
