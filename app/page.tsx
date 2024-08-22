import { Welcome } from '@/components/welcome'
import React from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'

const page = () => {
  return (
    <div>
      <Header/>
      <Welcome/>
      <Footer />
    </div>
  )
}

export default page