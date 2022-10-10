import { useShoppingCart } from "../../../contexts/ShoppingCartContext";
import { formatCurrency } from "../../../utils/formatCurrency";
import { TotalPriceContainer } from "./styles";
import { coffeeData as coffees } from '../../../service/data'

const SHIPPING_COST: number = 3;

export function TotalPrice() {
	const { cartItems } = useShoppingCart()

	return (
    <TotalPriceContainer>
							<div>
								<span>Total items</span>
								<span>
									{formatCurrency(
										cartItems.reduce((total, cartItem) => {
											const item = coffees.find(
												(i) => i.id === cartItem.id
											)
											return (
												total +
												(item?.price || 0) *
													cartItem.quantity
											)
										}, 0)
									)}
								</span>
							</div>
							<div>
								<span>Shipping</span>
								<span>{formatCurrency(SHIPPING_COST)}</span>
							</div>
							<div>
								<span>Total</span>
								<span>
									{formatCurrency(
										cartItems.reduce((total, cartItem) => {
											const item = coffees.find(
												(i) => i.id === cartItem.id
											)
											return (
												total +
												SHIPPING_COST +
												(item?.price || 0) *
													cartItem.quantity
											)
										}, 0)
									)}
								</span>
							</div>
						</TotalPriceContainer>
  )
}