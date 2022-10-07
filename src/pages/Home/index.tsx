import {
	HomeContainer,
	InfoContainer,
	InfoContainerBackground,
	InfoText,
	InfoItems,
	CoffeeListContainer,
	CoffeeListGrid,
	CoffeeListCard,
	CoffeeBadge,
} from './styles'
import { Timer, ShoppingCart, Package, Coffee, Minus, Plus } from 'phosphor-react'
import introImage from '../../assets/coffee-cup-and-beans.png'
import coffeeImage from '../../assets/coffee-expresso.png'
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
							<p>
								With Coffee Delivery you get your coffee
								wherever you are, anytime
							</p>
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
				<CoffeeListContainer>
					<h2>Nossos cafés</h2>
					<CoffeeListGrid>
						<CoffeeListCard>
							<img src={coffeeImage} />
							<CoffeeBadge>Traditional</CoffeeBadge>
							<h3>Traditional Expresso</h3>
							<p>Traditional coffee made with hot water and ground beans</p>
							<div className='footer'>
								<p>$<span className='footer_price'>9,90</span></p>
								<div className='footer_addToCart'>
									<div className='addToCart_quantity'>
										<Minus size={18} />
										<span>1</span>
										<Plus size={18}/>
									</div>
									<div className='addToCart_cart'>
										<ShoppingCart size={18} weight='fill' />
									</div>
								</div>
							</div>
						</CoffeeListCard>
						<CoffeeListCard>
							<img src={coffeeImage} />
							<CoffeeBadge>Traditional</CoffeeBadge>
							<h3>Traditional Expresso</h3>
							<p>Traditional coffee made with hot water and ground beans</p>
							<div className='footer'>
								<p>$<span className='footer_price'>9,90</span></p>
								<div className='footer_addToCart'>
									<div className='addToCart_quantity'>
										<Minus size={18} />
										<span>1</span>
										<Plus size={18}/>
									</div>
									<div className='addToCart_cart'>
										<ShoppingCart size={18} weight='fill' />
									</div>
								</div>
							</div>
						</CoffeeListCard>
						<CoffeeListCard>
							<img src={coffeeImage} />
							<CoffeeBadge>Traditional</CoffeeBadge>
							<h3>Traditional Expresso</h3>
							<p>Traditional coffee made with hot water and ground beans</p>
							<div className='footer'>
								<p>$<span className='footer_price'>9,90</span></p>
								<div className='footer_addToCart'>
									<div className='addToCart_quantity'>
										<Minus size={18} />
										<span>1</span>
										<Plus size={18}/>
									</div>
									<div className='addToCart_cart'>
										<ShoppingCart size={18} weight='fill' />
									</div>
								</div>
							</div>
						</CoffeeListCard>
						<CoffeeListCard>
							<img src={coffeeImage} />
							<CoffeeBadge>Traditional</CoffeeBadge>
							<h3>Traditional Expresso</h3>
							<p>Traditional coffee made with hot water and ground beans</p>
							<div className='footer'>
								<p>$<span className='footer_price'>9,90</span></p>
								<div className='footer_addToCart'>
									<div className='addToCart_quantity'>
										<Minus size={18} />
										<span>1</span>
										<Plus size={18}/>
									</div>
									<div className='addToCart_cart'>
										<ShoppingCart size={18} weight='fill' />
									</div>
								</div>
							</div>
						</CoffeeListCard>
					</CoffeeListGrid>
				</CoffeeListContainer>
			</HomeContainer>
		</>
	)
}
