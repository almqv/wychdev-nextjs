import styled from 'styled-components'
import ActiveLink from './activelink'

const NavCont = styled.nav`
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

const Nav = () => {
	return (
		<NavCont>
			<ActiveLink href="/">About</ActiveLink>
			<ActiveLink href="/#contact">Contact</ActiveLink>
			<ActiveLink href="/projects">Projects</ActiveLink>
			<a href="https://github.com/E-Almqvist" target="_blank" rel="noreferrer">GitHub</a>
			<a href="https://git.wych.dev" target="_blank" rel="noreferrer">WychGit</a>
		</NavCont>
	)
}

export default Nav
