import { ThemeProvider } from 'styled-components'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { ShoppingCartProvider } from './contexts/ShoppingCartContext'

function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<BrowserRouter>
				<ShoppingCartProvider>
					<Router />
				</ShoppingCartProvider>
			</BrowserRouter>
			<GlobalStyle />
		</ThemeProvider>
	)
}

export default App
