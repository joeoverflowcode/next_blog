import { BlogPosts } from 'app/components/posts'
import { TwoPosts } from './components/twoposts'
import Image from 'next/image'
import { CaseStudies } from './components/casestudy'
import HeroButton from './components/HeroButton'


export default function Page() {
  return (
    <section className='flex flex-col'>

      <div className='flex items-center'>
        {/* <h1 className="mb-8 text-3xl font-semibold tracking-tighter"> 
        </h1> */}
        <Image
        src="/images/hero.png"
        className='rounded-xl mb-4 border-1 border-gray-200'
        alt='profile image'
        priority={true}
        // placeholder='blur'
        width={200}
        height={500}
        />
        <div className='flex flex-col px-8'>
        <p className=" text-center" style={{ textIndent: '26px' }}>
        Hello, my name is Joe, I'm a web developer based out of Dallas, Texas. Check out some of my <a href='/blog'>Blog Posts</a> and <a href='/study'>Case Studies</a> to get an idea of the things I'm up to and how I'm helping shape the tech scene in DFW.
        </p>

          <HeroButton 
          otherClasses='mt-2 mx-auto'
          title='Contact'
          href='/contact'
          />

        </div>
      </div>





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
