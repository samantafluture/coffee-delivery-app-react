import styled from 'styled-components'

export const CoffeeListContainer = styled.div`
	h2 {
		font-family: 'Baloo 2', cursive;
		color: ${(props) => props.theme['base-subtitle']};
		font-weight: 800;
		font-size: 2rem;
		line-height: 2.6rem;
		margin-bottom: 0.875rem;
	}

	padding-bottom: 4rem;
`

export const CoffeeListGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	gap: 2rem;

	@media (min-width: 481px) and (max-width: 768px) {
		grid-template-columns: 1fr 1fr;
	}
	@media (max-width: 480px) {
		grid-template-columns: 1fr;
	}
`
