import styled from 'styled-components'
import ActiveLink from './activelink'

const Nav = styled.nav`
	display: flex;
	gap: 1.5rem;
	font-size: 1.2rem;
	border: unset;

	a {
		color: var(--fg-button);
		transition: var(--trans-time) opacity;
	}

	a:hover {
		opacity: .4;
	}
`

export default () => {
	return (
		<Nav>
			<ActiveLink href="/">Home</ActiveLink>
			<ActiveLink href="/projects">Projects</ActiveLink>
			<a href="https://github.com/E-Almqvist" target="_blank">GitHub</a>
		</Nav>
	)
}
