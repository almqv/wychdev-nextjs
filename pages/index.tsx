import type {NextPageWithLayout} from './_app'
import type { ReactElement } from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'

const Section = styled.section`
	display: flex;
	justify-content: center;
	flex-direction: column;
	padding: 4rem 1rem;

	h2 {
		font-size: 2rem;
	}

	p {
		color: var(--fg);
	}
`

const Page: NextPageWithLayout = () => {
	return (
		<>
			<Section>
				<h2 id="about">About</h2>
				<p>I am a student with a passion for programming, physics, mathematics and *NIX (Linux, UNIX etc). </p>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit ligula, congue in nunc nec, aliquam rutrum massa. Aliquam pharetra, dui nec tincidunt feugiat, lacus metus dignissim augue, et lobortis nisi nisi vitae sapien. Sed consequat nisl quis tincidunt vulputate. Proin sem lectus, consequat imperdiet iaculis vel, tempus vitae enim. Pellentesque ullamcorper, arcu ut dignissim tincidunt, odio quam dignissim nisi, ut tempor dolor tortor at dui. Mauris porta velit est, sed condimentum nunc facilisis nec. Integer porta urna ac semper mattis. Cras vitae enim vitae urna tristique laoreet. Suspendisse justo diam, euismod pellentesque urna id, vestibulum sagittis diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam ut ante ac nibh dapibus egestas. Pellentesque id tellus sit amet diam aliquam pellentesque a sit amet enim. Phasellus vel luctus tortor. In orci erat, mattis tempor tellus ac, porta euismod erat. Praesent non vestibulum mauris, vitae commodo ante. Curabitur ut turpis nec arcu scelerisque viverra. </p>
			</Section>

			<Section>
				<h2>Projects</h2>
				<p>Check out my past projects bla bla</p>
			</Section>
		</>
	)
}

Page.getLayout = (page: ReactElement) => {
	return <Layout>{page}</Layout>
}
export default Page

