import Header from './header'
import Footer from './footer'

export default ({children}) => {
	return <>
		<Header />
		<main>{children}</main>
		<Footer />
	</>
}
