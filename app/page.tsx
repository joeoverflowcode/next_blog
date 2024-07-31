import { BlogPosts } from 'app/components/posts'
import { TwoPosts } from './components/twoposts'
import Image from 'next/image'
import profile from '../app/public/images/profile.jpg'

export default function Page() {
  return (
    <section className='flex flex-col'>
      <h1 className="mb-8 text-3xl font-semibold tracking-tighter">
        
      </h1>
      <Image
      src="/images/hero.svg"
      className='rounded-[20px] mb-4'
      alt='profile image'
      priority={true}
      // placeholder='blur'
      width={600}
      height={500}
      />

      {/* <Image 
      src='https://github.com/joeoverflowcode/joeoverflowcode/blob/main/readme7.jpg?raw=true'
      alt='image'
      quality={100}
      width={540}
      height={420}
      className='border-2 border-gray-400 rounded-xl mb-4'
      /> */}
      <p className="mb-4" style={{ textIndent: '24px' }}>
        {`Hello World, my name is Joe Aguado and I'm a web developer based out of Dallas, Texas. I'm enthusiastic about technology that helps solve the needs for everyday business. The tech landscape is rapidly changing and I consider myself an asset to business owners who want to bridge the gap between their business and modern technology. Check out some of my posts below to get an idea of the things I'm up to and some of my interests.`}
      </p>
      <div className="my-4">
        {/* <BlogPosts /> */}
        <h1 className='my-4'>RecentEntries</h1>
        <TwoPosts />
      </div>
    </section>
  )
}
