import styled from "styled-components"
import Nav from "./nav"
import Link from "next/link"
import Menu from "./burgermenu"

const HeaderCont = styled.header`
	display: flex;
	align-items: center;
	border-bottom: var(--border-size) var(--border-type) var(--border-color);
	padding: .8rem 2rem;
	gap: 2rem;

	h1 {
		font-weight: normal;

		a {
			color: inherit;
		}
	}

	nav {
		margin-left: auto;
		float: right;
	}


	@media screen and (max-width: 960px) {
		padding: 1rem 2rem;
	}
`

const Header = () => {
	return (
		<HeaderCont>
			<h1><Link href="/">wych.dev</Link></h1>
			<Nav />
			<Menu />
		</HeaderCont>
	)
}

export default Header
