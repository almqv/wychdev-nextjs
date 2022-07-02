import Link from "next/link"
import styled from 'styled-components'

const Header = styled.header`
	display: flex;
	align-items: center;
	max-width: 70rem;
	padding: 0 4rem;
	border-bottom: 1px dotted #aaa;

	nav {
		margin-left: auto;
		float: right;
	}
`

const Nav = styled(Header).attrs({as: "nav"})`
	gap: 1.5rem;
	font-size: 1.5rem;
	border: unset;

	a {
		transition: .2s opacity
	}

	a:hover {
		opacity: .4;
	}
`

export default () => {
	return (
		<Header>
			<h1>wych.dev</h1>
			<Nav>
				<Link href="/">Home</Link>
				<Link href="/projects">Projects</Link>
				<a href="https://github.com/E-Almqvist" target="_blank">GitHub</a>
			</Nav>
		</Header>
	)
}
