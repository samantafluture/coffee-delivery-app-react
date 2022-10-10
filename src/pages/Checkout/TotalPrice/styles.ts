import styled from 'styled-components'

export const TotalPriceContainer = styled.div`
	margin-top: -0.5rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	div {
		display: flex;
		justify-content: space-between;
		margin: 0.75rem 0;
		font-size: 1rem;

		&:last-of-type {
			font-size: 1.25rem;
			font-weight: 700;
		}
	}
`