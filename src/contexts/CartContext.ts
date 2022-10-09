import { createContext } from 'react'
import { CoffeeTags } from '../pages/Home/components/CoffeeCard'

export interface Coffee {
	id?: string
	title: string
	price: number
	imgUrl: string
	tag?: CoffeeTags
	description?: string
	quantity?: number
}

export interface CartContextType {
	coffees: Coffee[]
	addToCart: (coffee: Coffee) => void
	removeFromCart: (id?: string) => void
	hasInTheCart: (coffee: Coffee) => boolean
}

export const CartContext = createContext<CartContextType>({
	coffees: [],
	addToCart: (coffee: Coffee) => console.log(coffee),
	removeFromCart: (id?: string) => console.log(id),
	hasInTheCart: () => false,
})
