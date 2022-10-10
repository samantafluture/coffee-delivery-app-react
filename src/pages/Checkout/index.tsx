import {
	CheckoutContainer,
	CartList,
	OrderInfoContainer,
	CartContainer,
	Divider,
	ButtonCheckout,
	ButtonCheckoutDisabled,
} from './styles'

import { useForm, FormProvider } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { useShoppingCart } from '../../contexts/ShoppingCartContext'
import { CartItem } from './CartItem'
import { TotalPrice } from './TotalPrice'
import { OrderFormType, OrderForm } from './OrderForm'

export function Checkout() {
	const { cartItems } = useShoppingCart()
	
	const methods = useForm<OrderFormType>()
	const { handleSubmit } = methods
	const onSubmit = (data: OrderFormType) => {
		console.log(data)
		navigate('/success');
	}
	const navigate = useNavigate();
	
	return (
		<FormProvider {...methods}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<CheckoutContainer>
					<OrderInfoContainer>
						<h2>Complete your order</h2>
						<OrderForm />
					</OrderInfoContainer>

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
								<ButtonCheckout type='submit'>
									Checkout
								</ButtonCheckout>
							)}
						</CartList>
					</CartContainer>
				</CheckoutContainer>
			</form>
		</FormProvider>
	)
}
