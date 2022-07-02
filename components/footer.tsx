import Link from "next/link"
import styled from 'styled-components'

const Footer = styled.footer`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	border-top: var(--border-size) var(--border-type) var(--border-color); 
	margin-top: auto;
	padding: 1.2rem;

	color: var(--fg-faded);
`

const UList = styled.ul`
	display: flex;
	flex-direction: row;
	list-style: none;
	gap: 2rem;
`

export default () => {
	return (
		<Footer>
			<p>Copyright &copy; {new Date().getFullYear()} Elias Almqvist</p>
			<UList>
				<li><a href="" target="_blank">GitHub</a></li>
				<li><a href="" target="_blank">Wych Git</a></li>
			</UList>
		</Footer>
	)
}
