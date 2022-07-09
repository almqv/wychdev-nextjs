import styled from "styled-components"
import NavLinks from "./navlinks"

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

	@media screen and (max-width: 960px) {
		display: none;
		position: absolute;
		top: 0;
	}
`

const Nav = () => {
	return (
		<NavCont>
			<NavLinks />
		</NavCont>
	)
}

export default Nav
