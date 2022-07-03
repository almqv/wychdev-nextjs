import styled from 'styled-components'
import Link from "next/link"

const MenuLine = styled.div`
	display: block;
	width: 15rem;
	height: 5px;
	border-radius: 4px;
	background-color: var(--fg);
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
