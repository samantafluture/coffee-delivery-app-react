import styled from 'styled-components'

export const SuccessContainer = styled.main`
	margin-top: 4.5rem;
`
export const SuccessHeader = styled.div`
	margin-bottom: 2.5rem;
  
	h2 {
		font-family: 'Baloo 2', cursive;
		color: ${(props) => props.theme['brand-yellow-dark']};
		font-weight: 800;
		font-size: 2rem;
		line-height: 3.9rem;
	}

	p {
		font-size: 1.25rem;
		color: ${(props) => props.theme['base-subtitle']};
	}
`

export const SuccessWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6.375rem;
`

export const OrderContainer = styled.div`
  padding: 2.5rem;
  border-radius: 6px 36px;
	border: 1px solid ${(props) => props.theme['brand-yellow-dark']};;
  width: 100%;
`

export const OrderDetails = styled.div`
	display: flex;
	gap: 0.75rem;
	margin-bottom: 2rem;
	align-items: center;

	svg {
		color: ${(props) => props.theme['base-background']};
	}

	p {
		color: ${(props) => props.theme['base-text']};
		font-size: 1rem;
		font-weight: 400;
	}

	span {
		font-weight: bold;
	}

	div {
		border-radius: 50%;
		padding: 0.5rem;
		width: 2rem;
		height: 2rem;
		display: flex;
		justify-content: center;
		align-items: center;

		color: ${(props) => props.theme['base-background']};
	}

	&:nth-of-type(1) {
		div {
			background-color: ${(props) => props.theme['brand-purple']};
		}
	}

	&:nth-of-type(2) {
		div {
			background-color: ${(props) => props.theme['brand-yellow']};
		}
	}

	&:nth-of-type(3) {
		div {
			background-color: ${(props) => props.theme['brand-yellow-dark']};
		}
    margin-bottom: 0;
	}

	&:nth-of-type(4) {
		div {
			background-color: ${(props) => props.theme['brand-purple']};
		}
	}
`
