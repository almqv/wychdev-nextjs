import type {NextPageWithLayout} from './_app'
import type { ReactElement } from 'react'
import Layout from '../components/layout'

const Page: NextPageWithLayout = () => {
	return (
		<>
			<p>I am a student with a passion for programming, physics/mathematics and *NIX (Linux, UNIX etc).</p>
		</>
	)
}

Page.getLayout = (page: ReactElement) => {
	return <Layout>{page}</Layout>
}
export default Page

