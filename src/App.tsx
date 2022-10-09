import { ThemeProvider } from 'styled-components'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import CartStorage from './service/CartStorage'
import { useReducer } from 'react'
import { cartReducer } from './reducers/cart/reducer'
import { Types } from './reducers/cart/types'
import { CartContext, Coffee } from './contexts/CartContext'

const initialValues = {
	coffees: CartStorage.getCoffeesCart(),
}

function App() {
	const [state, dispatch] = useReducer(cartReducer, initialValues)

	function removeFromCart(id: string = '0'): void {
		dispatch({ type: Types.CART_REMOVE, id })
	}
	function addToCart(coffee: Coffee): void {
		dispatch({ type: Types.CART_ADD, coffee })
	}

	function hasInTheCart(coffee: Coffee): boolean {
		return state.coffees.filter((c: any) => c.id === coffee.id).length > 0
	}

	return (
		<ThemeProvider theme={defaultTheme}>
			<BrowserRouter>
				<CartContext.Provider
					value={{
						coffees: state.coffees,
						removeFromCart,
						addToCart,
						hasInTheCart,
					}}
				>
					<Router />
				</CartContext.Provider>
			</BrowserRouter>
			<GlobalStyle />
		</ThemeProvider>
	)
}

export default App
