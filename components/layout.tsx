import Header from './header'
import Footer from './footer'
import {ReactNode} from 'react'

export default ({children}: {children: ReactNode}) => {
	return <>
		<Header />
			<main>{children}</main>
		<Footer />
	</>
}
