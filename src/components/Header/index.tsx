import {
	HeaderContainer,
	LocationContainer,
	CartContainer,
	CartCounter,
} from './styles'
import logo from '../../assets/logo-coffee-delivery.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useShoppingCart } from '../../contexts/ShoppingCartContext'

export function Header() {
	const { cartQuantity } = useShoppingCart()

	return (
		<HeaderContainer>
			<NavLink to={'/'}>
				<img src={logo} alt='Coffee Delivery Logo' />
			</NavLink>
			<nav>
				<NavLink to={'/'} title='location'>
					<LocationContainer>
						<MapPin size={22} weight='fill' />
						<span>Montreal, QC</span>
					</LocationContainer>
				</NavLink>
				<NavLink to={'/checkout'} title='checkout'>
					<CartContainer>
						<ShoppingCart size={22} weight='fill' />
						{cartQuantity > 0 && (
							<CartCounter>
								<span>{cartQuantity}</span>
							</CartCounter>
						)}
					</CartContainer>
				</NavLink>
			</nav>
		</HeaderContainer>
	)
}
