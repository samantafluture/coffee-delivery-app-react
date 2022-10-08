import styled from 'styled-components'

export const CheckoutContainer = styled.main`
	margin-top: 4.5rem;
	width: 100%;
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

export const FormContainer = styled.div`
	width: 100%;
	background-color: ${(props) => props.theme['base-card']};
	padding: 2.5rem;
	border-radius: 6px;
	margin-bottom: 0.75rem;
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
	justify-content: space-between;
	align-items: center;
`

export const ButtonWithIcon = styled.button`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 0.75rem;
	padding: 1rem;
	border: 0;
	border-radius: 6px;
	background-color: ${(props) => props.theme['base-button']};
	cursor: pointer;

	svg {
		color: ${(props) => props.theme['brand-purple']};
	}

	span {
		color: ${(props) => props.theme['base-text']};
		font-size: 0.75rem;
		text-transform: uppercase;
	}
`

export const CartContainer = styled(FormContainer)`
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
    
    svg {
      color: ${(props) => props.theme['brand-purple']};
    }
    
    span {
			color: ${(props) => props.theme['base-subtitle']};
			text-transform: uppercase;

		}
    
	}

	.cart_price {
		font-weight: 700;
	}
`
