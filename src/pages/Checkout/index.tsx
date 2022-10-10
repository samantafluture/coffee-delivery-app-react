import {
	CheckoutContainer,
	FormContainer,
	FormHeader,
	BaseInput,
	InputsContainer,
	FormHeaderAlternate,
	ButtonsContainer,
	ButtonWithIcon,
	CartList,
	AddressContainer,
	CartContainer,
	Divider,
	ButtonCheckout,
	ButtonCheckoutDisabled,
} from './styles'

import { MapPinLine, CreditCard, Bank, Money } from 'phosphor-react'
import { CartItem } from './CartItem'
import { useShoppingCart } from '../../contexts/ShoppingCartContext'
import { TotalPrice } from './TotalPrice'

export function Checkout() {
	const { cartItems } = useShoppingCart()

	return (
		<CheckoutContainer>
			<AddressContainer>
				<h2>Complete your order</h2>
				<FormContainer>
					<FormHeader>
						<MapPinLine size={20} />
						<div>
							<h3>Delivery address</h3>
							<p>
								Enter the address where you want to receive your
								order
							</p>
						</div>
					</FormHeader>
					<InputsContainer>
						<BaseInput type='text' placeholder='Zip Code' />
						<BaseInput
							type='text'
							placeholder='Number and Street'
						/>
						<BaseInput type='text' placeholder='Complement' />
						<BaseInput type='text' placeholder='City' />
						<div>
							<BaseInput
								type='text'
								placeholder='State or Province'
							/>
							<BaseInput type='text' placeholder='Country' />
						</div>
					</InputsContainer>
				</FormContainer>

				<FormContainer>
					<FormHeaderAlternate>
						<MapPinLine size={20} />
						<div>
							<h3>Payment</h3>
							<p>
								Payment is made on delivery. Choose the way you
								want to pay
							</p>
						</div>
					</FormHeaderAlternate>
					<ButtonsContainer>
						<ButtonWithIcon>
							<CreditCard size={16} />
							<span>Credit Card</span>
						</ButtonWithIcon>
						<ButtonWithIcon>
							<Bank size={16} />
							<span>Debit Card</span>
						</ButtonWithIcon>
						<ButtonWithIcon>
							<Money size={16} />
							<span>Cash</span>
						</ButtonWithIcon>
					</ButtonsContainer>
				</FormContainer>
			</AddressContainer>

			<CartContainer>
				<h2>Selected coffees</h2>
				<CartList>
					{cartItems.map((item) => (
						<>
							<CartItem key={item.id} {...item} />
							<Divider />
						</>
					))}
					{cartItems.length > 0 ? (
						<TotalPrice />
					) : (
						<span>Ops, your cart is empty!</span>
					)}
					{cartItems.length === 0 ? (
						<ButtonCheckoutDisabled>
							Checkout
						</ButtonCheckoutDisabled>
					) : (
						<ButtonCheckout href='/success'>
							Checkout
						</ButtonCheckout>
					)}
				</CartList>
			</CartContainer>
		</CheckoutContainer>
	)
}
