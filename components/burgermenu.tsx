import styled, {css} from "styled-components"
import React, {useState} from "react"
import NavLinks from "./navlinks"

const MenuLine = styled.div`
	width: 1.8rem;
	height: 3px;
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
	margin-left: auto;

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
		position: fixed;
		right: 4rem;
		z-index: 99;

		div {
			position: absolute;
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

const BNavCont = styled.nav<{show: boolean}>`
	display: none;
	backdrop-filter: blur(25px);
	position: fixed;
	flex-direction: column;
	background: #222a;
	left: 0;
	top: 0;
	width: 100vw;
	height: 100vh;
	z-index: 2;

	align-items: center;
	justify-content: center;

	gap: 1.5rem;
	font-size: 1.2rem;
	border: unset;

	a {
		font-size: 2rem;
		color: var(--fg-button);
		transition: var(--trans-time) opacity;
		text-align: center;
	}

	a:hover {
		opacity: .4;
	}


	${({show}) => show && css`
		display: flex;
	`}
`

const BNav: React.FC<{show: boolean}> = ({show}) => {
	return (
		<BNavCont show={show}>
			<NavLinks />
		</BNavCont>
	)
}

const Menu = () => {
	const [open, setOpen] = useState(false);
	return (
		<>
			<BNav show={open} />
			<BurgerContainer open={open} onClick={() => setOpen(!open)}>
					<MenuLine />
					<MenuLine />
					<MenuLine />
			</BurgerContainer>
		</>
	)
}

export default Menu
