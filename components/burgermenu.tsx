import styled, {css} from "styled-components"
import React, {useState} from "react"
//import Link from "next/link"

const MenuLine = styled.div`
	width: 1.8rem;
	height: 2px;
	border-radius: 2px;
	background-color: var(--fg);
	&:not(:last-child) {
		margin-bottom: .4rem;
	}
`

const BurgerContainer = styled.div<{open: boolean}>`
	display: none;
	width: 1.8rem;
	height: 1.8rem;
	background-color: yellow;
	flex-direction: column;
	justify-content: center;

	&:hover {
		cursor: pointer;
	}

	@media screen and (max-width: 960px) {
		display: flex;

		nav {
			display: none;
		}
	}

	${({open}) => open && css`
		background-color: red;
		div:not(:last-child) {
			background-color: green;
		}

		div:last-child {
			display: none;
		}
	`}
`

const Menu = () => {
	const [open, setOpen] = useState(false);
	return (
		<BurgerContainer open={open} onClick={() => setOpen(!open)}>
				<MenuLine />
				<MenuLine />
				<MenuLine />
		</BurgerContainer>
	)
}

export default Menu
