import Link from 'next/link'

import { ContainerInner, ContainerOuter } from '@/components/Container'

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="transition hover:text-teal-500 dark:hover:text-teal-400"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-32 flex-none">
      <ContainerOuter>
        <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
          <ContainerInner>
            <p className="text-sm text-center text-zinc-800 font-mono font-semibold dark:text-zinc-500">
              Built with <span className='font-normal font-serif'> ❤️ </span>  by Focus Tech
            </p>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  )
}
