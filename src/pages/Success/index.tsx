import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import deliveryIllustration from '../../assets/delivery-illustration.svg'
import {
	SuccessContainer,
	SuccessHeader,
	OrderContainer,
	OrderDetails,
	SuccessWrapper
} from './styles'

export function Success() {
	return (
		<SuccessContainer>
			<SuccessHeader>
				<h2>Yay! Your order is confirmed</h2>
				<p>
					Now all you have to do is wait for the coffee to come to you
					soon
				</p>
			</SuccessHeader>
			<SuccessWrapper>
				<OrderContainer>
					<OrderDetails>
						<div>
							<MapPin size={20} weight='fill' />
						</div>
						<article>
							<p>
								Delivery at <span>3400 Rue de Rushbrooke</span>
							</p>
							<p>Verdun, Montreal, QC - Canada</p>
						</article>
					</OrderDetails>
					<OrderDetails>
						<div>
							<Timer size={20} weight='fill' />
						</div>
						<article>
							<p>Delivery forecast</p>
							<p>
								<span>1 - 2 days</span>
							</p>
						</article>
					</OrderDetails>
					<OrderDetails>
						<div>
							<CurrencyDollar size={20} weight='fill' />
						</div>
						<article>
							<p>Payment method</p>
							<p>
								<span>Credit card</span>
							</p>
						</article>
					</OrderDetails>
				</OrderContainer>
				<img src={deliveryIllustration} alt="Illustration of a delivery person in a motorcycle" />
			</SuccessWrapper>
		</SuccessContainer>
	)
}
