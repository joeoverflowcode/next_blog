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

    <p>
    Let’s connect and discuss how we can work together on your next project. I'm open to collaborate on team projects, hackathons, consulting, contract work, part-time and full-time employment opportunities.
    </p>

    <div className='flex flex-col px-8'>

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