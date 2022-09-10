import styled from 'styled-components'
import Link from "next/link"

const FooterCont = styled.footer`
	display: flex;
	align-items: left;
	justify-content: center;
	flex-direction: column;
	border-top: var(--border-size) var(--border-type) var(--border-color); 
	margin-top: auto;
	padding: 0 1.2rem;

	color: var(--fg-faded);
`

const UList = styled.ul`
	display: flex;
	flex-direction: row;
	list-style: none;
	gap: 2rem;
`

const Spacer = styled.div`
	flex: 1;
`

const Footer = () => {
	return (
		<>
			<Spacer />
			<FooterCont>
				<p>&copy; {new Date().getFullYear()} Elias Almqvist</p>
			</FooterCont>
		</>
	)
}

export default Footer
