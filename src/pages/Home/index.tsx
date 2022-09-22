import { HomeContainer, InfoContainer,InfoContainerBackground, InfoText  } from './styles'
import { Timer, ShoppingCart, Package, Coffee } from 'phosphor-react'
import introImage from '../../assets/coffee-cup-and-beans.png'

export function Home() {
	return (
		<>
			<HomeContainer>
				<InfoContainerBackground>
					<InfoContainer>
						<InfoText>
							<h1>Find the perfect coffee for any time of day</h1>
							<h2>
								With Coffee Delivery you get your coffee
								wherever you are, anytime
							</h2>
							<div>
								<div>
									<div>
										<ShoppingCart size={16} weight='fill' />
										<span>Simple and secure purchase</span>
									</div>
									<div>
										<Timer size={16} weight='fill' />
										<span>Fast and tracked delivery</span>
									</div>
								</div>
								<div>
									<div>
										<Package size={16} weight='fill' />
										<span>
											Packaging keeps the coffee intact
										</span>
									</div>
									<div>
										<Coffee size={16} weight='fill' />
										<span>Coffee arrives fresh to you</span>
									</div>
								</div>
							</div>
						</InfoText>
						<img src={introImage} alt='coffee cup and beans' />
					</InfoContainer>
				</InfoContainerBackground>
			</HomeContainer>
		</>
	)
}
