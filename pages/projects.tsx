import type {NextPageWithLayout} from './_app'
import type { ReactElement } from 'react'
import Layout from '../components/layout'
import { Section } from './index'
// import Link from "next/link"

const Page: NextPageWithLayout = () => {
	return (
		<>
			<Section>
				<h2>GitHub Repositories</h2>
			</Section>
		</>
	)
}

Page.getLayout = (page: ReactElement) => {
	return <Layout>{page}</Layout>
}
export default Page
