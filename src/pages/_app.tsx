import React from 'react'
import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify';
import 'tailwindcss/tailwind.css'
import { Layout } from 'src/components/layout'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/fonts.css"
import '../styles/global.css'
import 'react-toastify/dist/ReactToastify.css';


function MyApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
            const loader = document.getElementById('globalLoader');
        if (loader)
            loader.style.display = 'none';
    }
  }, []);
  return (
    <Layout>
      <Component {...pageProps} />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Layout>
  )
}

export default MyApp
