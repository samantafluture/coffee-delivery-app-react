import { CoffeeCardContainer, CoffeeTag } from './styles'

import { ShoppingCart, Minus, Plus } from 'phosphor-react'
import { useShoppingCart } from '../../../../contexts/ShoppingCartContext'
import { formatCurrency } from '../../../../utils/formatCurrency'

export enum CoffeeTags {
	TRADITIONAL = 'Traditional',
	ICED = 'Iced',
	WITH_MILK = 'With Milk',
	SPECIAL = 'Special',
	ALCOHOLIC = 'Alcoholic',
}

export interface CoffeeProps {
	id: string
	imgUrl: string
	tag: CoffeeTags
	title: string
	description: string
	price: number
}

export function CoffeeCard({
	id,
	imgUrl,
	tag,
	title,
	description,
	price,
}: CoffeeProps) {
	const {
		getItemQuantity,
		increaseCartQuantity,
		decreaseCartQuantity,
	} = useShoppingCart()
	
	const quantity = getItemQuantity(id)
	
	return (
		<CoffeeCardContainer>
			<img src={imgUrl} />
			<CoffeeTag>{tag}</CoffeeTag>
			<h3>{title}</h3>
			<p>{description}</p>
			<div className='footer'>
				<p>
					<span className='footer_price'>{formatCurrency(price)}</span>
				</p>
				<div className='footer_addToCart'>
					<div className='addToCart_quantity'>
						<Minus size={18} onClick={() => decreaseCartQuantity(id)} />
						<span>{quantity}</span>
						<Plus size={18} onClick={() => increaseCartQuantity(id)} />
					</div>
					<div className='addToCart_cart' onClick={() => increaseCartQuantity(id)}>
						<ShoppingCart size={18} weight='fill' />
					</div>
				</div>
			</div>
		</CoffeeCardContainer>
	)
}
