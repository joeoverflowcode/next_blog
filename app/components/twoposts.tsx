import Link from 'next/link'
import { formatDate, 
  getBlogPosts, 
  getRecentBlogPosts } from 'app/blog/utils'
  import { CustomMDX } from 'app/components/mdx'

// export function BlogPosts() {
//   let allBlogs = getBlogPosts()

  export function TwoPosts() {
    let recentBlogs = getRecentBlogPosts(2)

  return (
    <div className='flex flex-col sm:flex-row gap-4'>
      {recentBlogs.map((post) => (
        <Link
          key={post.slug}
          className="flex flex-col space-y-1 mb-4"
          href={`/blog/${post.slug}`}
        >
          <div className=" rounded-2xl w-full flex flex-col space-x-0 md:space-x-2 border-2 border-black dark:border-white max-w-[24rem] p-4">
            <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
              {post.metadata.title}
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 w-[120px] tabular-nums">
              {formatDate(post.metadata.publishedAt, false)}
            </p>
            <article className=" line-clamp-2">
        <CustomMDX source={post.content} />
      </article>
          </div>
        </Link>
      ))}
    </div>
  )
}



