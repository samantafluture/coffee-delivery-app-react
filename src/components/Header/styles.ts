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
		
		div {
			border-radius: 6px;
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
`