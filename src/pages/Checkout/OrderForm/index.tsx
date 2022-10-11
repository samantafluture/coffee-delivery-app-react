import {
	FormContainer,
	FormHeader,
	BaseInput,
	InputsContainer,
	FormHeaderAlternate,
	ButtonsContainer,
	ButtonWithIcon,
} from './styles'

import { MapPinLine, CreditCard, Bank, Money } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'

export interface OrderFormType {
	id: string
	zipcode: string
	address: string
	complement: string
	city: string
	uf: string
	country: string
	paymentMethod: string
}

export function OrderForm() {
	const { register } = useFormContext<OrderFormType>()

	return (
		<>
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
					<BaseInput
						type='text'
						placeholder='Zip Code'
						{...register('zipcode')}
					/>
					<BaseInput
						type='text'
						placeholder='Number and Street'
						{...register('address')}
					/>
					<BaseInput
						type='text'
						placeholder='Complement'
						{...register('complement')}
					/>
					<BaseInput
						type='text'
						placeholder='City'
						{...register('city')}
					/>
					<div>
						<BaseInput
							type='text'
							placeholder='State or Province'
							{...register('uf')}
						/>
						<BaseInput
							type='text'
							placeholder='Country'
							{...register('country')}
						/>
					</div>
				</InputsContainer>
			</FormContainer>

			<FormContainer>
				<FormHeaderAlternate>
					<MapPinLine size={20} />
					<div>
						<h3>Payment</h3>
						<p>
							Payment is made on delivery. Choose the way you want
							to pay
						</p>
					</div>
				</FormHeaderAlternate>
				<ButtonsContainer>
					<input
						type='radio'
						value='Credit Card'
						{...register('paymentMethod')}
						defaultChecked
						id='creditCard'
					/>
					<ButtonWithIcon htmlFor='creditCard'>
						<CreditCard size={16} />
						<span>Credit Card</span>
					</ButtonWithIcon>
					<input
						type='radio'
						value='Debit Card'
						{...register('paymentMethod')}
						id='debitCard'
					/>
					<ButtonWithIcon htmlFor='debitCard'>
						<Bank size={16} />
						<span>Debit Card</span>
					</ButtonWithIcon>
					<input
						type='radio'
						value='Cash'
						{...register('paymentMethod')}
						id='cash'
					/>
					<ButtonWithIcon htmlFor='cash'>
						<Money size={16} />
						<span>Cash</span>
					</ButtonWithIcon>
				</ButtonsContainer>
			</FormContainer>
		</>
	)
}
