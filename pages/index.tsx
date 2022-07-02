import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'
import Header from 'components/header'


const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>wych.dev</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />
		</div>
	)
}

export default Home
