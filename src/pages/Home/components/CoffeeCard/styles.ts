import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
	/* width: 16rem; */
	background-color: ${(props) => props.theme['base-card']};
	border-radius: 6px 36px;
	text-align: center;
	padding: 1.25rem;
	margin-top: 1.375rem;
	cursor: pointer;
	
	img {
		margin-top: -2.5rem;
	}

	h3 {
		font-family: 'Baloo 2', cursive;
		color: ${(props) => props.theme['base-subtitle']};
		font-weight: 800;
		font-size: 1.25rem;
		line-height: 0.813rem;
		margin: 1rem 0 0.5rem;
		padding: 0.5rem;
	}

	p {
		color: ${(props) => props.theme['base-label']};
		font-size: 0.875rem;
		line-height: 1.15rem;
	}

	.footer {
		margin-top: 2.063rem;

		display: flex;
		justify-content: space-between;
		align-items: center;

		p {
			color: ${(props) => props.theme['base-subtitle']};
			font-size: 1rem;
		}

		.footer_price {
			font-family: 'Baloo 2', cursive;
			color: ${(props) => props.theme['base-subtitle']};
			font-weight: 800;
			font-size: 1.5rem;
			margin-left: 0.25rem;
		}

		.footer_addToCart {
			display: flex;
			justify-content: space-between;
			align-items: center;
			gap: 0.5rem;
			cursor: pointer;

			.addToCart_quantity {
				display: flex;
				justify-content: space-between;
				align-items: center;
				background-color: ${(props) => props.theme['base-button']};
				border-radius: 6px;
				padding: 0 0.5rem;
				color: ${(props) => props.theme['brand-purple']};
				font-size: 1.2rem;

				span {
					color: ${(props) => props.theme['base-subtitle']};
					padding: 0.5rem;
				}
			}
			.addToCart_cart {
				background-color: ${(props) => props.theme['brand-purple-dark']};
				color: ${(props) => props.theme['base-card']};
				border-radius: 6px;
				padding: 0.5rem;
				cursor: pointer;
				
				&:hover {
					background-color: ${(props) => props.theme['brand-purple']};
				}
		}
	}
}
`

export const CoffeeTag = styled.div`
	color: ${(props) => props.theme['brand-yellow-dark']};
	background-color: ${(props) => props.theme['brand-yellow-light']};
	border-radius: 100px;
	text-align: center;
	padding: 0.25rem 0.5rem;
	margin: 1rem 2.5rem;
	text-transform: uppercase;
	font-weight: 700;
`
