import styled from 'styled-components'

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
	
		input[type="radio"] {
		display: none;
	}
	
	input[type="radio"]:checked + label {
		background-color: ${(props) => props.theme['brand-purple-light']};
		border: 1px solid ${(props) => props.theme['brand-purple']};
	}
`

export const ButtonWithIcon = styled.label`
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