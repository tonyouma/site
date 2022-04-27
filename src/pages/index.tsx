import type { NextPage } from 'next'
import { Footer } from 'src/components/footer'
import { Header } from 'src/components/header'
import { Navbar } from 'src/components/navbar'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Navbar />


      <Footer />
    </>
  )
}

export default Home
