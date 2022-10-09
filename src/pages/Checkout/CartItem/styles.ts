import styled from 'styled-components'

export const CartItemContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	gap: 1.25rem;

	img {
		width: 4rem;
		height: 4rem;
	}
`
export const ItemDetailsContainer = styled.div`
	p {
		font-size: 1rem;
		color: ${(props) => props.theme['base-subtitle']};
		padding-bottom: 0.15rem;
	}
`

export const ItemButtons = styled.div`
	display: flex;
	justify-content: left;
	align-items: flex-start;
	margin-top: 0.5rem;
	gap: 0.5rem;
	margin-right: 1.875rem;
`

export const ItemButtonQuantity = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: ${(props) => props.theme['base-button']};
	border-radius: 6px;
	padding: 0 0.5rem;
	color: ${(props) => props.theme['brand-purple']};
	font-size: 1rem;

	span {
		color: ${(props) => props.theme['base-subtitle']};
		padding: 0.5rem;
	}
`

export const ItemButtonRemove = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	cursor: pointer;
	background-color: ${(props) => props.theme['base-button']};
	border-radius: 6px;
	padding: 0.5rem;
	gap: 0.5rem;
	font-size: 0.75rem;
	border: 1px solid ${(props) => props.theme['base-button']};

	svg {
		color: ${(props) => props.theme['brand-purple']};
	}

	span {
		color: ${(props) => props.theme['base-subtitle']};
		text-transform: uppercase;
	}

	&:hover {
		border: 1px solid ${(props) => props.theme['brand-purple']};
		background-color: ${(props) => props.theme['brand-purple-light']};
	}
`

export const ItemPrice = styled.span`
	font-weight: 700;
`
