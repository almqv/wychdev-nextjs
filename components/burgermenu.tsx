import styled from 'styled-components'
import Link from "next/link"

const MenuLine = styled.div`
	width: 2rem;
	height: 2px;
	border-radius: 2px;
	background-color: var(--fg);
	&:not(:last-child) {
		margin-bottom: .4rem;
	}
}
`

const Menu = () => {
	return (
		<div className="burger-container">
				<MenuLine />
				<MenuLine />
				<MenuLine />
		</div>
	)
}

export default Menu
