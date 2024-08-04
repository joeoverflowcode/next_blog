import Link from 'next/link'

const navItems = {
  '/': {
    name: 'Home',
  },
  '/blog': {
    name: 'Blog',
  },
  '/study': {
      name:'Case Studies'
  },
  '/contact': {
    name: 'Contact',
  }
  // 'https://vercel.com/templates/next.js/portfolio-starter-kit': {
  //   name: 'deploy',
  // }, -mr-[8px]
}

export function Navbar() {
  return (
    <div className="mb-12 sm:mb-20 tracking-tight">
      <div className="sticky sm:top-20">
        <nav
          className="flex flex-row-reverse relative pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 ">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:opacity-50 flex align-middle relative pr-4"
                >
                  {name}
                </Link>
              )
            })}
          </div>
        </nav>
      </div>
    </div>
  )
}
