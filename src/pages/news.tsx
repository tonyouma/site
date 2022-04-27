import React from 'react'
import type { NextPage } from 'next'
import { Header } from 'src/components/header';
import { Navbar } from 'src/components/navbar';
import { Footer } from 'src/components/footer';

const news: NextPage =()=> {
  return (
    <>
      <Header />
      <Navbar />

      <Footer />
    </>
  )
}

export default news