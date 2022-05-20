import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hunting Coder
        </h1>

        <p className={styles.description}>
          A blog for hunting coder by a hunting coder.
        </p>
        <div className="blogs">
          <h2>Popular Blog Post</h2>

          <div className="blogItem">
            <h3>How to learn javascript?</h3>
            <p>Javascript is the language used to design logic for the web</p>
          </div>

          <div className="blogItem">
            <h3>How to learn javascript?</h3>
            <p>Javascript is the language used to design logic for the web</p>
          </div>

          <div className="blogItem">
            <h3>How to learn javascript?</h3>
            <p>Javascript is the language used to design logic for the web</p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
