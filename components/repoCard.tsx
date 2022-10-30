import styled from "styled-components"

const RepoCardCont = styled.div`
	display: flex;

	h3 a {
		color: var(--fg);
	}
`

const RepoCard = (props: any) => { // TODO: make schema
	return (
		<RepoCardCont key={props.id}>
			<h3><a href={props.url} target="_blank">{props.name}</a></h3>
		</RepoCardCont>
	)
}

export default RepoCard 
