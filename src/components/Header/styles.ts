import styled from 'styled-components'

export const HeaderContainer = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;

	nav {
		display: flex;
		gap: 0.75rem;

		a {
			text-decoration: none;
			cursor: pointer;
		}
	}
`

export const LocationContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.25rem;

	background-color: ${(props) => props.theme['brand-purple-light']};
	color: ${(props) => props.theme['brand-purple-dark']};

	padding: 0.5rem;
	line-height: 1.138rem;
	font-size: 0.875rem;
	border-radius: 6px;

	svg {
		color: ${(props) => props.theme['brand-purple']};
	}
`

export const CartContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	background-color: ${(props) => props.theme['brand-yellow-light']};
	color: ${(props) => props.theme['brand-yellow-dark']};

	padding: 0.5rem;
	border-radius: 6px;

	position: relative;
`

export const CartCounter = styled.div`
	background-color: red;

	position: absolute;
	z-index: 1;
	top: -0.5rem;
	right: -0.522rem;
	width: 1.25rem;
	height: 1.25rem;
	border-radius: 1000px;

	background-color: ${(props) => props.theme['brand-yellow-dark']};
	color: ${(props) => props.theme['base-white']};

	display: flex;
	justify-content: center;
	align-items: center;

	span {
		font-weight: 700;
		font-size: 0.75rem;
	}
`
