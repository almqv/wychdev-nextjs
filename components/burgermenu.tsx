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
	flex-direction: column;
	justify-content: center;

	div {
		transition: .2s;
	}

	&:hover {
		cursor: pointer;
	}

	@media screen and (max-width: 960px) {
		display: flex;

		nav {
			display: none !important;
			position: absolute;
			top: 0;
		}
	}

	${({open}) => open && css`
		div {
			position: absolute;
			height: 4px;
		}

		div:nth-child(1) {
			transform: rotate(45deg) translate(.2rem, .2rem);
		}

		div:nth-child(2) {
			transform: rotate(-45deg) translate(-.18rem, .2rem);
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
