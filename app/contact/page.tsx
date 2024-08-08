import React from 'react'
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";
import socials from 'app/components/socials';
import Socials from 'app/components/socials';
import HeroButton from 'app/components/HeroButton';
export const metadata = {
    title: 'Contact',
    description: 'How to contact Joe',
  }

const Page = () => {
  return (
    <>
    <h1 className='font-semibold text-2xl mb-8 tracking-tighter'>Contact Me</h1>

    <p className=" text-center" style={{ }}>
 I'm open to collaborate on open source projects, meetups, and hackathons. I offer contract and freelance services for website builds. I am open to part-time and full-time employment opportunities.
    </p>

    <div className='flex'>
    <HeroButton 
otherClasses='mt-4 mb-4 mx-auto'
title='Resume'
href='/Aguado2024.pdf'
/>
<HeroButton 
otherClasses='mt-4 mb-4 mx-auto'
title='Message'
href='mailto:aguado.joe@gmail.com?subject=Work Inquiry'
/>


</div>

    {/* <Socials /> */}

    </>
  )
}

export default Page