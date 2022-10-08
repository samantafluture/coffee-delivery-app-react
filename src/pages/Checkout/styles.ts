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

export const AddressContainer = styled.div`
	width: 60%;
	margin-bottom: 4rem;

`

export const CartContainer = styled.div`
	width: 40%;
	
`

export const FormContainer = styled.div`
	width: 100%;
	background-color: ${(props) => props.theme['base-card']};
	padding: 2.5rem;
	border-radius: 6px;
	margin-bottom: 0.75rem;
	flex: 2;
`

export const FormHeader = styled.div`
	display: flex;
	gap: 0.5rem;
	margin-bottom: 2rem;

	svg {
		color: ${(props) => props.theme['brand-yellow-dark']};
	}

	h3 {
		color: ${(props) => props.theme['base-subtitle']};
		font-size: 1rem;
		font-weight: 400;
	}

	p {
		color: ${(props) => props.theme['base-text']};
		font-size: 0.875rem;
	}
`

export const InputsContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;

	input:first-of-type {
		width: 50%;
	}

	div {
		display: flex;
		gap: 1rem;

		input:last-of-type {
			width: 90%;
		}
	}
`

export const BaseInput = styled.input`
	background: ${(props) => props.theme['base-input']};
	border: 1px solid ${(props) => props.theme['base-button']};
	color: ${(props) => props.theme['base-label']};
	border-radius: 4px;
	padding: 0.75rem;
	font-size: 0.875rem;
`

export const FormHeaderAlternate = styled(FormHeader)`
	svg {
		color: ${(props) => props.theme['brand-purple']};
	}
`
export const ButtonsContainer = styled.div`
	display: flex;
	gap: 0.75rem;
	justify-content: stretch;
	align-items: center;
`

export const ButtonWithIcon = styled.button`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 0.75rem;
	padding: 1rem;
  border: 1px solid ${(props) => props.theme['base-button']};
	border-radius: 6px;
	background-color: ${(props) => props.theme['base-button']};
	cursor: pointer;

	&:hover {
		border: 1px solid ${(props) => props.theme['brand-purple']};
		background-color: ${(props) => props.theme['brand-purple-light']};
	}

	&:selected {
		background-color: ${(props) => props.theme['brand-purple-light']};
		border: 1px solid ${(props) => props.theme['brand-purple']};
	}

	svg {
		color: ${(props) => props.theme['brand-purple']};
	}

	span {
		color: ${(props) => props.theme['base-text']};
		font-size: 0.75rem;
		text-transform: uppercase;
	}
`

export const CartList = styled(FormContainer)`
	border-radius: 6px 44px;
`

export const CartItem = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	gap: 1.25rem;

	img {
		width: 4rem;
		height: 4rem;
	}

	p {
		font-size: 1rem;
		color: ${(props) => props.theme['base-subtitle']};
		padding-bottom: 0.15rem;
	}

	.cart_btns {
		display: flex;
		justify-content: left;
		align-items: flex-start;
		margin-top: 0.5rem;
		gap: 0.5rem;
		margin-right: 1.875rem;
	}

	.cart_btnQuantity {
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
	}

	.cart_btnRemove {
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
	}

	.cart_price {
		font-weight: 700;
	}
`
export const Divider = styled.div`
	border-top: 1px solid ${(props) => props.theme['base-button']};
	margin: 2rem 0;
`

export const PriceBreakdown = styled.div`
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
export const ButtonCheckout = styled.button`
	border: 0;
	background-color: ${(props) => props.theme['brand-yellow']};
	color: ${(props) => props.theme['base-white']};
	text-transform: uppercase;
	font-weight: 700;
	width: 100%;
	padding: 0.75rem 0.5rem;
	border-radius: 6px;
	margin-top: 1.5rem;
	cursor: pointer;

	&:hover {
		background-color: ${(props) => props.theme['brand-yellow-dark']};
	}
`
