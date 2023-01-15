import {IconDefinition} from "@fortawesome/fontawesome-svg-core"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import styled from "styled-components"

const ILink = styled.a`
	font-size: 1.5rem;
	margin: 0 .4rem;
`

const IconLink = ({href, icon, target, rel}: {href: string, icon: IconDefinition, target: string, rel: string}) => {
	return (
		<ILink href={href} target={target} rel={rel}><FontAwesomeIcon icon={icon}/></ILink>
	)
}

export default IconLink
