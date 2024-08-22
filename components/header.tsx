import React from 'react'
import Link from 'next/link'
import { SVGProps } from 'react';


const header = () => {
  return (
    <div>
         <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="/" className="flex items-center justify-center" prefetch={false}>
          <CloudLightningIcon className="h-6 w-6" />
          <span className="sr-only">AI Flashcards</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Account
          </Link>
          <Link href="/membership" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Membership
          </Link>
          <Link href="/library" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Contact
          </Link>
        </nav>
      </header>
    </div>
  )
}
export default header

function CloudLightningIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>): JSX.Element  {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973" />
        <path d="m13 12-3 5h4l-3 5" />
      </svg>
    )
  }
