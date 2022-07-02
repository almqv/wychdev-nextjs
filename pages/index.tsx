import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>wych.dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

		<h1>wych.dev</h1>
		<h2>A very cool website</h2>
    </div>
  )
}

export default Home
