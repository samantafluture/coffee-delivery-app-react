import { createContext, ReactNode, useContext, useState } from 'react'
import { useLocalStorage } from '../service/useLocalStorage'

type CartItem = {
	id: string
	quantity: number
}

type ShoppingCartProviderProps = {
	children: ReactNode
}

type ShoppingCartContext = {
	getItemQuantity: (id: string) => number
	increaseCartQuantity: (id: string) => void
	decreaseCartQuantity: (id: string) => void
	removeFromCart: (id: string) => void
	cartQuantity: number
	cartItems: CartItem[]
}

export const ShoppingCartContext = createContext({} as ShoppingCartContext)

export function useShoppingCart() {
	return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
	const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
		'shopping-cart',
		[]
	)

	const cartQuantity = cartItems.reduce(
		(quantity, item) => item.quantity + quantity,
		0
	)

	function getItemQuantity(id: string) {
		return cartItems.find((item) => item.id === id)?.quantity || 0
	}

	function increaseCartQuantity(id: string) {
		setCartItems((currentItems) => {
			if (currentItems.find((item) => item.id === id) == null) {
				return [...currentItems, { id, quantity: 1 }]
			} else {
				return currentItems.map((item) => {
					if (item.id === id) {
						return { ...item, quantity: item.quantity + 1 }
					} else {
						return item
					}
				})
			}
		})
	}

	function decreaseCartQuantity(id: string) {
		setCartItems((currentItems) => {
			if (currentItems.find((item) => item.id === id)?.quantity === 1) {
				return currentItems.filter((item) => item.id !== id)
			} else {
				return currentItems.map((item) => {
					if (item.id === id) {
						return { ...item, quantity: item.quantity - 1 }
					} else {
						return item
					}
				})
			}
		})
	}

	function removeFromCart(id: string) {
		setCartItems((currentItems) => {
			return currentItems.filter((item) => item.id !== id)
		})
	}

	return (
		<ShoppingCartContext.Provider
			value={{
				getItemQuantity,
				increaseCartQuantity,
				decreaseCartQuantity,
				removeFromCart,
				cartQuantity,
				cartItems,
			}}
		>
			{children}
		</ShoppingCartContext.Provider>
	)
}
