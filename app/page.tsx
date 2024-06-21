import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-3xl font-semibold tracking-tighter">
        Blog
      </h1>
      <p className="mb-4">
        {`Hello World, my name is Joe Aguado and I'm a web developer based out of Dallas, Texas. I'm enthusiastic about technology that helps solve the needs for everyday business. The technological landscape is rapidly changing and I consider myself an asset to business owners who want to bridge those gaps. Check out some of my posts below to get an idea of the things I'm up to and some of my interests. Feel free to reach out to me at the links below!`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
