import React from 'react'
import type { NextPage } from 'next'
import { Header } from 'src/components/header';
import { Navbar } from 'src/components/navbar';

const clients: NextPage =()=> {
  return (
    <>
      <Header />
      <Navbar />
    </>
  )
}

export default clients