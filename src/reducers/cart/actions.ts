import { Coffee } from '../../contexts/CartContext'
import CartStorage from '../../service/CartStorage'

export function clear(): Coffee[] {
	CartStorage.clearCart()
	return []
}

export function remove(coffees: Coffee[], id = ''): Coffee[] {
	CartStorage.removeCoffeeOfCart(id)
	return coffees.filter((coffee) => coffee.id !== id)
}

export function add(coffees: Coffee[], coffee?: Coffee): Coffee[] {
	if (coffee && !coffees.find((c) => c.id === coffee.id)) {
		CartStorage.addCoffeeToCart(coffee)
		return [...coffees, coffee]
	}
	return coffees
}
