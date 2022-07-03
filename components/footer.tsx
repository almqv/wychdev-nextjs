import styled from 'styled-components'
import Link from "next/link"

const FooterCont = styled.footer`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	border-top: var(--border-size) var(--border-type) var(--border-color); 
	margin-top: auto;
	padding: 1.2rem;

	color: var(--fg-faded);
`

const UList = styled.ul`
	display: flex;
	flex-direction: row;
	list-style: none;
	gap: 2rem;
`

const Spacer = styled.div`
	flex: 1;
`

const Footer = () => {
	return (
		<>
			<Spacer />
			<FooterCont>
				<p>Copyright &copy; {new Date().getFullYear()} Elias Almqvist</p>
				<UList>
					<li><a href="#">{"<Back to top>"}</a></li>
					<li><Link href="/">{"<Go back home>"}</Link></li>
				</UList>
				<p>Source Code</p>
				<UList>
					<li><a href="https://github.com/E-Almqvist/wychdev-nextjs" target="_blank" rel="noreferrer">GitHub</a></li>
					<li><a href="https://git.wych.dev/wychdev-nextjs.git" target="_blank" rel="noreferrer">WychGit</a></li>
				</UList>
			</FooterCont>
		</>
	)
}

export default Footer
