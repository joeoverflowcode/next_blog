import React from 'react'
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

const Icons = [
    {
        logo: FaLinkedin,
        name: "Linked In",
        href: "www.linkedin.com/in/joeaguado",
    },
    {
        logo: FaGithub,
        name: "Github",
        href: "https://www.github.com/joeoverflowcode/",
    },
    {
        logo: FaEnvelope,
        name: "Email",
        href: "mailto:aguado.joe@gmail.com?subject=Work Inquiry"
    },
    {
        logo: FaPhone,
        name: "Phone",
        href: "tel:808-979-5367"
    },
]

const SocialIcon = ({logo: Logo, name, href} : { logo : React.ElementType; name: string; href:string}) => {
    return (
        <div className='text-[12px]'>
            <a 
            className='flex flex-col items-center sm:flex-row sm:justify-end hover:opacity-50'
            href={href}>
            <Logo 
            className='mb-2 sm:ml-4 sm:mr-1' size={28} />
                <p className='sm:block hidden'>{name}</p>
            </a>
        </div>
    )
}

function Socials() {
  return (
    <div className='flex justify-evenly items-end'>

        {/* //replace this */}
    {/* <div className='flex text-sm items-center gap-2.5'><FaLinkedin size={25}/> Linked In</div>
    <div className='flex text-sm items-center gap-2.5'><FaGithub size={25}/>Github</div>
    <div className='flex text-sm items-center gap-2.5'><FaEnvelope size={25}/>Email</div>
    <div className='flex text-sm items-center gap-2.5'><FaPhone size={25}/>Phone</div> */}

        {Icons.map((icon, index) => (
            <SocialIcon key={index} logo={icon.logo} name={icon.name} href={icon.href} />
        ))}


    </div>
  )
}

export default Socials