import Link from "next/link"
import styled from 'styled-components'

const Header = styled.header`
	display: flex;
	gap: 1rem;
	align-items: center;
	line-height: 1;
`

const Nav = styled(Header).attrs({as: "nav"})``

export default () => {
	return (
		<Header>
			<h1>wych.dev</h1>
			<Nav>
				<Link href="/">Home</Link>
				<Link href="/projects">Projects</Link>
			</Nav>
		</Header>
	)
}
