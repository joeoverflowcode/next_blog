import Link from 'next/link'
import { formatDate, getCaseStudy } from 'app/study/utils'
import { CustomMDX } from 'app/components/mdx'

export function CaseStudies() {
  let caseStudies = getCaseStudy()

  return (

    <div className='flex flex-col items-center'>
      {caseStudies
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/study/${post.slug}`}
          >
            <div className="w-full flex flex-col space-x-0 md:space-x-2">
              {/* <p className="text-neutral-600 dark:text-neutral-400 w-[120px] tabular-nums">
                {formatDate(post.metadata.publishedAt, false)}
              </p> */}
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                {post.metadata.title}
              </p>

             {/* <article className="prose line-clamp-2">
        <CustomMDX source={post.content} />
      </article> */}
      <img src={post.metadata.image} alt={post.metadata.title} className='w-[400px]'/>
            </div>
          </Link>
        ))}
    </div>
  )
}
