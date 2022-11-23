import styled from 'styled-components'
// import Link from "next/link"

const FooterCont = styled.footer`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 0 1.2rem;

	color: var(--fg-faded);
`

// const UList = styled.ul`
// 	display: flex;
// 	flex-direction: row;
// 	list-style: none;
// 	gap: 2rem;
// `

export const Spacer = styled.div`
	flex: 1;
`

const Footer = () => {
	return (
		<>
			<FooterCont>
				<p>&copy; Copyright {new Date().getFullYear()}</p>
			</FooterCont>
		</>
	)
}

export default Footer
