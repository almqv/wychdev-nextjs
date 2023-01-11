import type {NextPageWithLayout} from "./_app"
import type { ReactElement } from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import Link from "next/link"
import IconLink from "components/iconlink"
import {faEnvelope, faFolderOpen} from "@fortawesome/free-solid-svg-icons"
import {faGit, faGithub} from "@fortawesome/free-brands-svg-icons"
import Footer, {Spacer} from "components/footer"

export const Section = styled.section`
	display: flex;
	justify-content: center;
	flex-direction: column;
	padding: 0 1rem;
	/*margin: 2rem 0;*/
	margin: 0 0;
	min-height: 100vh;

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

	#img-container {
		display: flex;
		justify-content: center;
	}
	#img-container img {
		width: 22rem;
		height: auto;
	}

	footer {
		margin-top: 1rem;
		opacity: .5;
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

export const LinkList = styled.div`
	display: flex;
	gap: 1.5rem;
	font-size: 1.2rem;
	border: unset;
	justify-content: center;

	a {
		color: var(--fg-button);
		transition: var(--trans-time) opacity;
	}

	a:hover {
		opacity: .4;
	}

	@media screen and (max-width: 960px) {
		word-break: break-word;
	}
`

function getAge() {
	let birth = 1050019200;
	let now = Math.floor(Date.now() / 1000);
	return now-birth;
}

function secondsToYears(secs: number) {
	return Math.floor(secs / 31557600.0);
}

const Page: NextPageWithLayout = () => {
	return (
		<>
			<Section> 
				<h2 id="about">$ whoami</h2> 
				<p>&gt; I am a {secondsToYears(getAge())} year old <em>Computer Science & Engineering student</em> with a passion for <em>programming</em>, <em>physics</em>, <em>mathematics</em> and anything <em>*NIX</em> <Nem>(Linux, UNIX etc)</Nem> related.</p>
				{/*TODO: Add GitHub code frequency/contrib here*/}
				<p className="topmargin">Most of my projects are open-source, and if you are interested, you can find all of my projects on my <a href="https://git.wych.dev" target="_blank" rel="noreferrer">git-server</a> or <a href="https://github.com/almqv" target="_blank" rel="noreferrer">GitHub</a>. You can also check out <Link href="/projects">/projects</Link> to view all of my projects (including hardware projects and so on).</p> 

				{/*
				<div className="topmargin" id="img-container">
					<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=almqv&theme=dark&exclude_repo=hsf,the_auctionhouse,dotfiles,scripts,dmenu,dwmblocks,ewm,machinelearning,adventofcode,python-machinelearning,st,scroll,prog1&layout=compact&count_private=true&hide_border=true&bg_color=1d2021" />
				</div>
				  */}

				<LinkList className="topmargin">
					<IconLink href="#contact" icon={ faEnvelope } target="_self" rel="noreferrer"/>
					<IconLink href="/projects" icon={ faFolderOpen } target="_self" rel="noreferrer"/>
					<IconLink href="https://github.com/almqv" icon={ faGithub } target="_blank" rel="noreferrer"/>
					<IconLink href="https://git.wych.dev" icon={ faGit } target="_blank" rel="noreferrer"/>
				</LinkList>
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
						GitHub: <a href="https://github.com/almqv" target="_blank" rel="noreferrer">github.com/almqv</a>
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

