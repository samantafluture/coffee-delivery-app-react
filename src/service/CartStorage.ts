import { Coffee } from '../contexts/ShoppingCartContext'

class CartStorage {
	private key = 'persist:cart'

	public getCoffeesCart(): Coffee[] {
		try {
			const coffees = JSON.parse(localStorage.getItem(this.key) || '[]')
			return coffees
		} catch (error) {
			console.log(error)
			return []
		}
	}

	private setCoffeesToCart(coffees: Coffee[]): void {
		localStorage.setItem(this.key, JSON.stringify(coffees || []))
	}
  
  public addCoffeeToCart(coffee: Coffee): void {
    const coffees = [...this.getCoffeesCart(), coffee];
    this.setCoffeesToCart(coffees);
  }

	public removeCoffeeOfCart(id: string = '0'): void {
		const coffees = this.getCoffeesCart().filter(
			(coffee) => coffee.id !== id
		)
		this.setCoffeesToCart(coffees)
	}

	public clearCart(): void {
		localStorage.setItem(this.key, '[]')
	}
}

export default new CartStorage()
