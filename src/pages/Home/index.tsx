import {
	HomeContainer,
	InfoContainer,
	InfoContainerBackground,
	InfoText,
	InfoItems,
} from './styles'
import { Timer, ShoppingCart, Package, Coffee } from 'phosphor-react'
import introImage from '../../assets/coffee-cup-and-beans.png'

export function Home() {
	return (
		<>
			<HomeContainer>
				<InfoContainerBackground>
					<InfoContainer>
						<InfoText>
							<h1>
								Find the perfect coffee for any time of the day
							</h1>
							<h2>
								With Coffee Delivery you get your coffee
								wherever you are, anytime
							</h2>
							<InfoItems>
								<article>
									<div>
										<ShoppingCart size={16} weight='fill' />
									</div>
									<span>Simple and secure purchase</span>
								</article>
								<article>
									<div>
										<Timer size={16} weight='fill' />
									</div>
									<span>Fast and tracked delivery</span>
								</article>
								<article>
									<div>
										<Package size={16} weight='fill' />
									</div>
									<span>
										Packaging keeps the coffee intact
									</span>
								</article>
								<article>
									<div>
										<Coffee size={16} weight='fill' />
									</div>
									<span>Coffee arrives fresh to you</span>
								</article>
							</InfoItems>
						</InfoText>
						<img src={introImage} alt='coffee cup and beans' />
					</InfoContainer>
				</InfoContainerBackground>
			</HomeContainer>
		</>
	)
}
