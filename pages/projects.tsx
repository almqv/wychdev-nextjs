import type {NextPageWithLayout} from "./_app"
import type { ReactElement } from "react"
import Layout from "../components/layout"
import { Section } from "./index"
// import Link from "next/link"
// import RepoCard from "components/repoCard";

const Page: NextPageWithLayout = () => {
	return (
		<>
			<Section>
				<h2>Pinned GitHub Repos</h2>
				<div>
				</div>
			</Section>
		</>
	)
}

Page.getLayout = (page: ReactElement) => {
	return <Layout>{page}</Layout>
}
export default Page
