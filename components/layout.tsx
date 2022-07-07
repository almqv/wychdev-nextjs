import Header from "./header"
import Footer from "./footer"
import {ReactNode} from "react"
import Head from "next/head"

const Layout = ({children}: {children: ReactNode}) => {
	return <>
		<Head>
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<title>wych.dev</title>
		</Head>
		<Header />
			<main>{children}</main>
		<Footer />
	</>
}

export default Layout
