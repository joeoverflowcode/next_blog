import { BlogPosts } from 'app/components/posts'
import { CaseStudies } from 'app/components/casestudy'

export const metadata = {
  title: 'Case Studies',
  description: 'Learn about my Case Studies',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter flex flex-col">Case Studies</h1>
      < CaseStudies />
    </section>
  )
}
