import type {NextPageWithLayout} from './_app'
import type { ReactElement } from 'react'
import Layout from '../components/layout'

const Page: NextPageWithLayout = () => {
	return (
		<>
			<h1>yo, projects here</h1>
		</>
	)
}

Page.getLayout = (page: ReactElement) => {
	return <Layout>{page}</Layout>
}
export default Page
