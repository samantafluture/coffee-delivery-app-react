import styled from 'styled-components'
import imageBackground from '../../assets/banner-background.png'

export const HomeContainer = styled.main``

export const InfoContainerBackground = styled.div`
	background-image: url(${imageBackground});
	background-position: center;
	background-repeat: no-repeat;
	background-size: overflow;

	box-shadow: 0 0 20px 100px ${(props) => props.theme['base-background']}
		inset;

	width: 100%;
	height: 100%;
`

export const InfoContainer = styled.div`
	height: 100%;
	padding: 5.875rem 0;

	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	gap: 3.5rem;

	background: transparent;
	backdrop-filter: blur(80px);
`

export const InfoText = styled.div`
	h1 {
		font-family: 'Baloo 2', cursive;
		color: ${(props) => props.theme['base-title']};
		font-weight: 800;
		font-size: 3rem;
		line-height: 3.9rem;
		margin-bottom: 1rem;
	}

	p {
		color: ${(props) => props.theme['base-subtitle']};
		font-size: 1.25rem;
		font-weight: 400;
		line-height: 1.625rem;
	}
`

export const InfoItems = styled.div`
	margin-top: 4.125rem;

	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 1fr;
	gap: 1.25rem;

	article {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		gap: 0.75rem;

		div {
			border-radius: 50%;
			padding: 0.5rem;
			width: 2rem;
			height: 2rem;

			color: ${(props) => props.theme['base-background']};
		}

		&:nth-of-type(1) {
			div {
				background-color: ${(props) =>
					props.theme['brand-yellow-dark']};
			}
		}

		&:nth-of-type(2) {
			div {
				background-color: ${(props) => props.theme['base-text']};
			}
		}

		&:nth-of-type(3) {
			div {
				background-color: ${(props) => props.theme['brand-yellow']};
			}
		}

		&:nth-of-type(4) {
			div {
				background-color: ${(props) => props.theme['brand-purple']};
			}
		}

		span {
			line-height: 1.3rem;
		}
	}
`

export const CoffeeListContainer = styled.div`
	h2 {
		font-family: 'Baloo 2', cursive;
		color: ${(props) => props.theme['base-subtitle']};
		font-weight: 800;
		font-size: 2rem;
		line-height: 2.6rem;
		margin-bottom: 0.875rem;
	}
`

export const CoffeeListGrid = styled.div`
	display: grid;
	gap: 2rem;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	max-width: 80rem;
	
		@media (min-width: 481px) and (max-width: 768px) {
		grid-template-columns: 1fr 1fr;
	}
	@media (max-width: 480px) {
		grid-template-columns: 1fr;
	}

`

export const CoffeeListCard = styled.div`
	width: 16rem;
	background-color: ${(props) => props.theme['base-card']};
	border-radius: 6px 36px;
	text-align: center;
	padding: 1.25rem;

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
		line-height: 0.813rem;
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

export const CoffeeBadge = styled.div`
	color: ${(props) => props.theme['brand-yellow-dark']};
	background-color: ${(props) => props.theme['brand-yellow-light']};
	border-radius: 100px;
	text-align: center;
	padding: 0.25rem 0.5rem;
	margin: 1rem 2.5rem;
	text-transform: uppercase;
	font-weight: 700;
`
