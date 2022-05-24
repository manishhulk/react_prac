import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next and Bootstrap</title>
        <meta name="description" content="A demo about NextJS and Bootstrap 5" />
      </Head>
      <Navbar />
      <img src="/home.jpg" />
      <Footer />
    </div>
  )
}
