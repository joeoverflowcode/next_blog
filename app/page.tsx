import { BlogPosts } from 'app/components/posts'
import Image from 'next/image'
import profile from '../app/public/images/profile.jpg'

export default function Page() {
  return (
    <section className='flex flex-col'>
      <h1 className="mb-8 text-3xl font-semibold tracking-tighter">
        _blog
      </h1>
      <Image
      // src={profile}
      src="/images/profile.jpg"
      className='rounded-[10px] border-2 border-gray-400 ml-4 mb-4'
      alt='profile image'
      width={300}
      height={450}
      />
      <p className="mb-4">
        {`Hello World, my name is Joe Aguado and I'm a web developer based out of Dallas, Texas. I'm enthusiastic about technology that helps solve the needs for everyday business. The technology landscape is rapidly changing and I consider myself an asset to business owners who want to bridge the gap between business and technology. Check out some of my posts below to get an idea of the things I'm up to and some of my interests.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
