import type {NextPageWithLayout} from "./_app"
import type { ReactElement } from "react"
import Layout from "../components/layout"
import Nav from "../components/nav"
import styled from "styled-components"
import Link from "next/link"

export const Section = styled.section`
	display: flex;
	justify-content: center;
	flex-direction: column;
	padding: 0 1rem;
	/*margin: 2rem 0;*/
	margin: 0 0;
	height: 100vh;

	h2, h3 {
		margin: 8px 0;
	}

	p {
		margin: 0;
		color: var(--fg);
	}

	.topmargin {
		margin-top: 2rem;
	}

	ul li {
		margin: .5rem 2.5rem;	
	}
`

export const Code = styled.code`
	background-color: var(--bg-dark);
	color: var(--fg-code);
	border-radius: .4rem;
	padding: .1rem .4rem;
`

export const CList = styled.ul`
	list-style: none;

	li {
		margin: 1rem !important;
	}
`

export const Nem = styled.span`
	color: var(--fg-faded);
	opacity: .8;
`

const Page: NextPageWithLayout = () => {
	return (
		<>
			<Section> 
				<h2 id="about">$ whoami</h2> 
				<p>&gt; I am a <em>Computer Science & Engineering student</em> with a passion for <em>programming</em>, <em>physics</em>, <em>mathematics</em> and anything <em>*NIX</em> <Nem>(Linux, UNIX etc)</Nem> related.</p>
				{/*TODO: Add GitHub code frequency/contrib here*/}
				<p className="topmargin">Most of my projects are open-source, and if you are interested, you can find all of my projects on my <a href="https://git.wych.dev" target="_blank" rel="noreferrer">git-server</a> or <a href="https://github.com/E-Almqvist" target="_blank" rel="noreferrer">GitHub</a>. You can also check out <Link href="/projects">/projects</Link> to view all of my projects (including hardware projects and so on).</p> 
				<Nav />
			</Section> 

			<Section>
				<h2 id="skills">Skills</h2>
				<p>Here are programming languages/technologies that I know/use (<em>not limited to or ranked in any particular order</em>):</p>
				<h3>Programming Languages</h3>
				<ul>
					<li>Rust</li>
					<li>C/C++</li>
					<li>Python</li>
					<li>Ruby</li>
					<li>Lua Script</li>
					<li>Assembly <Nem>(NASM, x86)</Nem></li>
					<li>Bash <Nem>(Literally any POSIX shell)</Nem></li>
					<li>TypeScript/JavaScript</li>
					<li>C#</li>
				</ul>

				<h3>Technologies</h3>
				<ul>
					<li>HTML + CSS/SASS/SCSS</li>
					<li>Docker</li>
					<li>
						Linux <Nem>(GNU/Linux)</Nem>
						<ul>
							<li>Arch</li>
							<li>Debian</li>
							<li>...</li>
						</ul>
					</li>
					<li>Next.js (+ React)</li>
					<li>Git</li>
					<li>Jira</li>
					<li>SSH</li>
					<li>NGINX</li>
				</ul>
			</Section>

			<Section>
				<h2 id="contact">Contact</h2>
				<p>You can contact me through email. And if you prefer it, you can contact me using PGP. Do note that my <em>email address below is encrypted</em> as a precaution against bots et cetera. <em>Do not worry, it is easy to crack</em>. Alternatively you could query for my email with my PGP fingerprint (key-id) on some PGP key server (i.e. the <a href="https://pgp.mit.edu/" target="_blank" rel="noreferrer">MIT</a> or <a href="https://keyserver.ubuntu.com/" target="_blank" rel="noreferrer">Ubuntu</a> key-server).</p>
				<CList>
					<li>
						PGP fingerprint: <Code>68B2 9768 49F0 3C72 38AE B081 E31A 99CE 3E75 A158</Code>
					</li>
					<li>
						Email: <Code>cnlueXpkaXZmZ0B0em52eS5wYnoK</Code>
					</li>
					<li>
						GitHub: <a href="https://github.com/E-Almqvist" target="_blank" rel="noreferrer">github.com/E-Almqvist</a>
					</li>
				</CList>
			</Section>
		</>
	)
}

Page.getLayout = (page: ReactElement) => {
	return <Layout>{page}</Layout>
}
export default Page

