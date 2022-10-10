import styled from 'styled-components'

export const CheckoutContainer = styled.main`
	margin-top: 4.5rem;
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	gap: 2rem;

	h2 {
		font-family: 'Baloo 2', cursive;
		color: ${(props) => props.theme['base-subtitle']};
		font-weight: 700;
		font-size: 1.125rem;
		margin-bottom: 1rem;
		text-align: left;
	}
`

export const OrderInfoContainer = styled.div`
	width: 60%;
	margin-bottom: 4rem;
`

export const CartContainer = styled.div`
	width: 40%;
`

export const CartList = styled.div`
	width: 100%;
	background-color: ${(props) => props.theme['base-card']};
	padding: 2.5rem;
	margin-bottom: 0.75rem;
	flex: 2;
	border-radius: 6px 44px;
	
	a {
		text-decoration: none;
	}
`

export const Divider = styled.div`
	border-top: 1px solid ${(props) => props.theme['base-button']};
	margin: 2rem 0;
`

export const ButtonCheckout = styled.button`
	border: 0;
	text-decoration: none;
	background-color: ${(props) => props.theme['brand-yellow']};
	color: ${(props) => props.theme['base-white']};
	text-transform: uppercase;
	font-weight: 700;
	width: 100%;
	padding: 0.75rem 0.5rem;
	border-radius: 6px;
	margin-top: 1.5rem;
	cursor: pointer;
	display: block;
	text-align: center;

	&:hover {
		background-color: ${(props) => props.theme['brand-yellow-dark']};
	}
`

export const ButtonCheckoutDisabled = styled(ButtonCheckout)`
	background-color: ${(props) => props.theme['brand-yellow-dark']};
	opacity: 0.7;
	cursor: not-allowed;
`
