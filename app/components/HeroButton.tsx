import React from 'react'

const HeroButton = ({title, href, icon, position, handleClick, otherClasses } : { 
    title : string;
    href?: string;
    icon?: React.ReactNode;
    position?: string;
    handleClick?: () => void ;
    otherClasses?: string; }) => {
  return (
    <button className={`shadow-[inset_0_0_0_2px_#616467] text-black px-6 py-3 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200 ${otherClasses}`}><a href={href}>
    {title}</a>
    </button>
  )
}

export default HeroButton