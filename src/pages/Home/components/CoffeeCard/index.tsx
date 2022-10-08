import { CoffeeCardContainer, CoffeeTag } from './styles'

import { ShoppingCart, Minus, Plus } from 'phosphor-react'

export enum CoffeeTags {
	TRADITIONAL = 'Traditional',
	ICED = 'Iced',
	WITH_MILK = 'With Milk',
	SPECIAL = 'Special',
	ALCOHOLIC = 'Alcoholic',
}

export interface CoffeeProps {
	id?: string
	imgUrl: string
	tag: CoffeeTags
	title: string
	description: string
	price: number
	quantity: number
}

export function CoffeeCard({
	imgUrl,
	tag,
	title,
	description,
	price,
	quantity,
}: CoffeeProps) {
	return (
		<CoffeeCardContainer>
			<img src={imgUrl} />
			<CoffeeTag>{tag}</CoffeeTag>
			<h3>{title}</h3>
			<p>{description}</p>
			<div className='footer'>
				<p>
					$<span className='footer_price'>{price}</span>
				</p>
				<div className='footer_addToCart'>
					<div className='addToCart_quantity'>
						<Minus size={18} />
						<span>{quantity}</span>
						<Plus size={18} />
					</div>
					<div className='addToCart_cart'>
						<ShoppingCart size={18} weight='fill' />
					</div>
				</div>
			</div>
		</CoffeeCardContainer>
	)
}
