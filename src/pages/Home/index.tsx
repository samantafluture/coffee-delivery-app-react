import { CoffeeListContainer, CoffeeListGrid } from './styles'

import { Hero } from './components/Hero'
import { CoffeeCard } from './components/CoffeeCard'

import { coffeeData } from '../../service/data'

export function Home() {
	return (
		<>
			<Hero />
			<CoffeeListContainer>
				<h2>Our coffees</h2>
				<CoffeeListGrid>
					{coffeeData.map((coffee) => {
						return (
							<CoffeeCard
								imgUrl={coffee.imgUrl}
								tag={coffee.tag}
								title={coffee.title}
								description={coffee.description}
								price={coffee.price}
								quantity={coffee.quantity}
							/>
						)
					})}
				</CoffeeListGrid>
			</CoffeeListContainer>
		</>
	)
}
