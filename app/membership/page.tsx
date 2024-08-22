import { Welcome } from '@/components/welcome'
import React from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Price } from '@/components/price'

const page = () => {
  return (
    <div>
      <Header/>
      <Price/>
      <Footer />
    </div>
  )
}

export default page