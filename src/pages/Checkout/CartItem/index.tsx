import {
	CartItemContainer,
	ItemDetailsContainer,
	ItemPrice,
	ItemButtons,
	ItemButtonQuantity,
	ItemButtonRemove,
} from './styles'

import { Minus, Plus, Trash } from 'phosphor-react'
import { useShoppingCart } from '../../../contexts/ShoppingCartContext'
import { coffeeData as coffees } from '../../../service/data'
import { formatCurrency } from '../../../utils/formatCurrency'

type CartItemProps = {
	id: string
	quantity: number
}

export function CartItem({ id, quantity }: CartItemProps) {
	const { removeFromCart, increaseCartQuantity, decreaseCartQuantity } = useShoppingCart()
	const item = coffees.find(i => i.id === id)
	if (item === null) return null
	
	return (
		<CartItemContainer>
			<img src={item?.imgUrl} />
			<ItemDetailsContainer>
				<p>{item?.title}</p>
				<ItemButtons>
					<ItemButtonQuantity>
						<Minus size={18} onClick={() => decreaseCartQuantity(id)} />
						<span>{quantity}</span>
						<Plus size={18} onClick={() => increaseCartQuantity(id)} />
					</ItemButtonQuantity>
					<ItemButtonRemove onClick={() => removeFromCart(id)}>
						<Trash size={18} />
						<span>Remove</span>
					</ItemButtonRemove>
				</ItemButtons>
			</ItemDetailsContainer>
			<ItemPrice>{formatCurrency((item?.price || 0)* quantity)}</ItemPrice>
		</CartItemContainer>
	)
}
