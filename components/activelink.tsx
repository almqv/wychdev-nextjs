import { useRouter } from "next/router"
import { ReactNode } from "react"
import Link from "next/link"
import styled, {css} from "styled-components"

const ALink = styled.a<{active?: boolean}>`
	border-bottom: 1px solid transparent;
	${({active}) => active && css`
		color: var(--fg) !important;
		border-bottom-color: currentColor;
	`}
`

const ActiveLink = ({children, href}: {children: ReactNode, href: string}) => {
	const router = useRouter()
	return (
		<Link href={href} passHref>
			<ALink active={router.asPath === href}>{children}</ALink>
		</Link>
	)
}

export default ActiveLink
