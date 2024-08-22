import Link from "next/link"
import Img from 'next/image';
import { SVGProps } from 'react';
import  { SignedIn, SignedOut,  UserButton } from '@clerk/nextjs';

export function Welcome() {
  return (
    <div className="flex flex-col min-h-[100dvh]" >
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Master Any Subject with AI-Powered Flashcards
                </h1>
                <p className="mt-4 text-muted-foreground md:text-xl">
                  Personalized learning, progress tracking, and spaced repetition to help you ace your exams and achieve
                  your goals.
                </p>
                <div className="mt-6 space-x-4">
                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Start Learning
                  </Link>
                </div>
              </div>
              <div className="mb-20">
                <Img
                  src="/Learn.jpg"
                  width="550"
                  height="550"
                  alt="Hero"
                  className="mx-auto aspect-square overflow-hidden rounded-3xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-12 lg:py-16" style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      textAlign: 'center'
    }}>
         <div className="container flex flex-col justify-center items-center h-screen text-center sm:px-2 space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center" >
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Unlock Your Full Potential</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our AI-powered flashcard app is designed to help you learn efficiently and effectively, no matter the
                  subject.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <UserIcon className="h-8 w-8 text-primary" />
                <h3 className="text-lg font-bold">Personalized Learning</h3>
                <p className="text-sm text-muted-foreground">
                  Our AI algorithm adapts to your learning style and pace, ensuring you master the material.
                </p>
              </div>
              <div className="grid gap-1">
                <StepForwardIcon className="h-8 w-8 text-primary" />
                <h3 className="text-lg font-bold">Progress Tracking</h3>
                <p className="text-sm text-muted-foreground">
                  Monitor your progress and see how you&apos;re improving over time.
                </p>
              </div>
              <div className="grid gap-1">
                <RepeatIcon className="h-8 w-8 text-primary" />
                <h3 className="text-lg font-bold">Spaced Repetition</h3>
                <p className="text-sm text-muted-foreground">
                  Our spaced repetition algorithm ensures you retain information long-term.
                </p>
              </div>
              <div className="grid gap-1">
                <FlashlightIcon className="h-8 w-8 text-primary" />
                <h3 className="text-lg font-bold">Flashcard Library</h3>
                <p className="text-sm text-muted-foreground">
                  Access a vast library of flashcards covering a wide range of subjects.
                </p>
              </div>
              <div className="grid gap-1">
                <CombineIcon className="h-8 w-8 text-primary" />
                <h3 className="text-lg font-bold">Collaborative Learning</h3>
                <p className="text-sm text-muted-foreground">
                  Study with friends and share flashcards to learn together.
                </p>
              </div>
              <div className="grid gap-1">
                <ServerOffIcon className="h-8 w-8 text-primary" />
                <h3 className="text-lg font-bold">Offline Access</h3>
                <p className="text-sm text-muted-foreground">
                  Study on the go with our offline mode, available on all devices.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Start Learning
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

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


function CombineIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>): JSX.Element {
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
      <rect width="8" height="8" x="2" y="2" rx="2" />
      <path d="M14 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2" />
      <path d="M20 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2" />
      <path d="M10 18H5c-1.7 0-3-1.3-3-3v-1" />
      <polyline points="7 21 10 18 7 15" />
      <rect width="8" height="8" x="14" y="14" rx="2" />
    </svg>
  )
}


function FlashlightIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>): JSX.Element  {
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
      <path d="M18 6c0 2-2 2-2 4v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4V2h12z" />
      <line x1="6" x2="18" y1="6" y2="6" />
      <line x1="12" x2="12" y1="12" y2="12" />
    </svg>
  )
}


function RepeatIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>): JSX.Element  {
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
      <path d="m17 2 4 4-4 4" />
      <path d="M3 11v-1a4 4 0 0 1 4-4h14" />
      <path d="m7 22-4-4 4-4" />
      <path d="M21 13v1a4 4 0 0 1-4 4H3" />
    </svg>
  )
}


function ServerOffIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>): JSX.Element {
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
      <path d="M7 2h13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5" />
      <path d="M10 10 2.5 2.5C2 2 2 2.5 2 5v3a2 2 0 0 0 2 2h6z" />
      <path d="M22 17v-1a2 2 0 0 0-2-2h-1" />
      <path d="M4 14a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16.5l1-.5.5.5-8-8H4z" />
      <path d="M6 18h.01" />
      <path d="m2 2 20 20" />
    </svg>
  )
}


function StepForwardIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>): JSX.Element {
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
      <line x1="6" x2="6" y1="4" y2="20" />
      <polygon points="10,4 20,12 10,20" />
    </svg>
  )
}


function UserIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>): JSX.Element {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}
