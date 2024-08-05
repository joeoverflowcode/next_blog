import React from 'react'
import HeroButton from './HeroButton'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='flex flex-col items-center md:flex-row mb-10'>
    <Image
    src="/images/hero.png"
    className='rounded-2xl mb-4 border-1 border-black dark:border-gray-200'
    alt='profile image'
    priority={true}
    // placeholder='blur'
    width={180}
    height={500}
    />
    <div className='px-8'>

  <p className=" text-center" style={{ textIndent: '26px' }}>
  Hello, my name is Joe, I'm a web developer based out of Dallas, Texas. Check out my <a href='/blog'>Blog Posts</a> and <a href='/study'>Case Studies</a> to get an idea of the things I'm up to and how I'm helping shape the tech scene in DFW.
  </p>

    <div className='flex flex-col px-8'>

      <HeroButton 
      otherClasses='mt-4 mb-4 mx-auto'
      title='Contact'
      href='/contact'
      />

      </div>
</div>
  </div>
  )
}

export default Hero