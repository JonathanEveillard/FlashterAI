import React from 'react'
import { SignIn } from '@clerk/nextjs'
import { ClerkProvider } from '@clerk/nextjs'

const LogIn = () => {
  return (
    <div>
        <ClerkProvider>
            <SignIn />
        </ClerkProvider>
    </div>
  )
}

export default LogIn