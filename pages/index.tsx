// Stuff
import type {NextPageWithLayout} from './_app'
import type { ReactElement } from 'react'
import Layout from '../components/layout'

// Components
// import Head from 'next/head'
// import styles from '../styles/Home.module.css'
// import Header from 'components/header'


const Page: NextPageWithLayout = () => {
	return (
		<p>yo</p>
	)
}

Page.getLayout = (page: ReactElement) => {
	return <Layout>{page}</Layout>
}
export default Page

// const Home: NextPage = () => {
// 	return (
// 		<div className={styles.container}>
// 			<Head>
// 				<title>wych.dev</title>
// 				<link rel="icon" href="/favicon.ico" />
// 			</Head>
// 
// 			<Header />
// 		</div>
// 	)
// }

//export default Home


