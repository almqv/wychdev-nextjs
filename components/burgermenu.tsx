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
`

const BurgerContainer = styled.div`
	display: none;
	flex-direction: column;

	@media screen and (max-width: 960px) {
		display: flex;

		nav {
			display: none;
		}
	}
`

const Menu = () => {
	return (
		<BurgerContainer>
				<MenuLine />
				<MenuLine />
				<MenuLine />
		</BurgerContainer>
	)
}

export default Menu
