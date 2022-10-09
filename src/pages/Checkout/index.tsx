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
	PriceBreakdown,
	ButtonCheckout,
} from './styles'

import {
	MapPinLine,
	CreditCard,
	Bank,
	Money,
} from 'phosphor-react'
import { CartItem } from './CartItem'

export function Checkout() {
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
					<CartItem />
					<Divider />
					<CartItem />
					<Divider />
					<PriceBreakdown>
						<div>
							<span>Total items</span>
							<span>$ 29.97</span>
						</div>
						<div>
							<span>Shipping</span>
							<span>$ 3.00</span>
						</div>
						<div>
							<span>Total</span>
							<span>$ 32.97</span>
						</div>
					</PriceBreakdown>
					<ButtonCheckout href='/success'>Checkout</ButtonCheckout>
				</CartList>
			</CartContainer>
		</CheckoutContainer>
	)
}
