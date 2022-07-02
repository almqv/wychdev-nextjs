import Link from "next/link"
import styled from 'styled-components'

const Nav = styled.nav`
	display: flex;
	gap: 1.5rem;
	font-size: 1.2rem;
	border: unset;

	a {
		color: var(--fg-button);
		transition: .2s opacity;
	}

	a:hover {
		opacity: .4;
	}
`

export default () => {
	return (
		<Nav>
			<Link href="/">Home</Link>
			<Link href="/projects">Projects</Link>
			<a href="https://github.com/E-Almqvist" target="_blank">GitHub</a>
		</Nav>
	)
}
