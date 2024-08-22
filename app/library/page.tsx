import { Welcome } from '@/components/welcome'
import React from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Library } from '@/components/library'

const page = () => {
  return (
    <div>
      <Header/>
      <Library/>
      <Footer />
    </div>
  )
}

export default page