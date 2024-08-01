import React from 'react'
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";


export const metadata = {
    title: 'Contact',
    description: 'How to contact Joe',
  }

const Page = () => {
  return (
    <>
    <h1 className='font-semibold text-2xl mb-8 tracking-tighter'>Contact Me</h1>


    <div className='text-3xl flex flex-col gap-6'>
    <div className='flex text-sm items-center gap-2.5'><FaLinkedin size={25}/> Linked In</div>
    <div className='flex text-sm items-center gap-2.5'><FaGithub size={25}/>Github</div>
    <div className='flex text-sm items-center gap-2.5'><FaEnvelope size={25}/>Email</div>
    <div className='flex text-sm items-center gap-2.5'><FaPhone size={25}/>Phone</div>
    </div>
    </>
  )
}

export default Page