import { BlogPosts } from 'app/components/posts'
import { TwoPosts } from './components/twoposts'
import Image from 'next/image'
import { CaseStudies } from './components/casestudy'
import HeroButton from './components/HeroButton'
import Hero from './components/hero'

export default function Page() {
  return (
    <section className='flex flex-col items-center'>

<Hero />
        {/* <Image
        src="/images/hero.png"
        className='rounded-xl mb-4 border-1 border-black dark:border-gray-200'
        alt='profile image'
        priority={true}
        // placeholder='blur'
        width={180}
        height={500}
        />
      <p className=" text-center" style={{ textIndent: '26px' }}>
      Hello, my name is Joe, I'm a web developer based out of Dallas, Texas. Check out my <a href='/blog'>Blog Posts</a> and <a href='/study'>Case Studies</a> to get an idea of the things I'm up to and how I'm helping shape the tech scene in DFW.
      </p>

        <div className='flex flex-col px-8'>

          <HeroButton 
          otherClasses='mt-4 mb-4 mx-auto'
          title='Contact'
          href='/contact'
          />


      </div> */}





      <div className="my-4">
        {/* <BlogPosts /> */}
        <h1 className='mb-2'>Recent Blog Entries</h1>
        <TwoPosts />
        <h1 className='mt-10 mb-2'>Case Studies</h1>
        <CaseStudies />
      </div>
    </section>
  )
}
