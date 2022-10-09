import {
	CartItemContainer,
	ItemDetailsContainer,
	ItemPrice,
	ItemButtons,
	ItemButtonQuantity,
	ItemButtonRemove,
} from './styles'

import { Minus, Plus, Trash } from 'phosphor-react'

import expresso from '../../../assets/coffees/expresso.png'

export function CartItem() {
	return (
		<CartItemContainer>
			<img src={expresso} />
			<ItemDetailsContainer>
				<p>Traditional Express</p>
				<ItemButtons>
					<ItemButtonQuantity>
						<Minus size={18} />
						<span>1</span>
						<Plus size={18} />
					</ItemButtonQuantity>
					<ItemButtonRemove>
						<Trash size={18} />
						<span>Remove</span>
					</ItemButtonRemove>
				</ItemButtons>
			</ItemDetailsContainer>
			<ItemPrice>$ 9.99</ItemPrice>
		</CartItemContainer>
	)
}
