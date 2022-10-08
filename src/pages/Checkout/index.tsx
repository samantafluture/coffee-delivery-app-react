import {
	CheckoutContainer,
	FormContainer,
	FormHeader,
	BaseInput,
	InputsContainer,
	FormHeaderAlternate,
	ButtonsContainer,
	ButtonWithIcon,
	CartContainer,
  CartItem
} from './styles'

import {
	MapPinLine,
	CreditCard,
	Bank,
	Money,
	Minus,
	Plus,
	Trash,
} from 'phosphor-react'
import expresso from '../../assets/coffees/expresso.png'
import late from '../../assets/coffees/late.png'

export function Checkout() {
	return (
		<CheckoutContainer>
			<div>
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
			</div>

			<div>
				<h2>Selected coffees</h2>
				<CartContainer>
					<CartItem>
						<img src={expresso} />
						<div>
							<p>Traditional Express</p>
							<div className='cart_btns'>
								<div className='cart_btnQuantity'>
									<Minus size={18} />
									<span>1</span>
									<Plus size={18} />
								</div>
								<div className='cart_btnRemove'>
									<Trash size={18} />
                  <span>Remove</span>
								</div>
							</div>
						</div>
						<span className='cart_price'>$ 9.99</span>
					</CartItem>
				</CartContainer>
			</div>
		</CheckoutContainer>
	)
}
