import type {NextPageWithLayout} from './_app'
import type { ReactElement } from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'
import Link from "next/link"

const Section = styled.section`
	display: flex;
	justify-content: center;
	flex-direction: column;
	padding: 0 1rem;
	margin: 2rem 0;

	h2 {
		margin: 8px 0;
	}

	p {
		margin: 0;
		color: var(--fg);
	}
`

const Code = styled.code`
	background-color: var(--bg-dark);
	color: var(--fg-code);
	border-radius: .4rem;
	padding: .1rem .4rem;
`

const CList = styled.code`
	list-style: none;

	li {
		margin: 1rem;
	}
`

const Page: NextPageWithLayout = () => {
	return (
		<>
			<Section>
				<h2 id="about">About</h2>
				<p>I am a student with a passion for programming, physics, mathematics and *NIX (Linux, UNIX etc). </p>
			</Section>

			<Section>
				<h2 id="contact">Contact</h2>
				<p>You can contact me through email. And if you prefer it, you can contact me using PGP. Do note that my <em>email address below is encrypted</em> as a precaution for bots et cetera. Do not worry, it is easy to crack. Alternatively you could search for my PGP fingerprint on some key server (i.e. <a href="https://pgp.mit.edu/" target="_blank">MIT</a>, <a href="https://keyserver.ubuntu.com/" target="_blank">Ubuntu</a>) as my email is "connected" to it.</p>
				<CList>
					<li>
						PGP Fingerprint: <Code>68B2976849F03C7238AEB081E31A99CE3E75A158</Code>
					</li>
					<li>
						Email: <Code>cnlueXpkaXZmZ0B0em52eS5wYnoK</Code>
					</li>
					<li>
						GitHub: <a href="https://github.com/E-Almqvist" target="_blank">github.com/E-Almqvist</a>
					</li>
				</CList>
			</Section>

			<Section>
				<h2>Projects</h2>
				<p>Most of my projects are open-source, and if you are interested, you can find all of my projects on my <a href="https://github.com/E-Almqvist">GitHub</a>. You can also check out <Link href="/projects">/projects</Link> to view all of my projects (including hardware projects and so on).</p>
			</Section>
		</>
	)
}

Page.getLayout = (page: ReactElement) => {
	return <Layout>{page}</Layout>
}
export default Page

