import { HeaderContainer, LocationNavLink, CartNavLink } from './styles'
import logo from '../../assets/logo-coffee-delivery.svg'
import { MapPin, ShoppingCart } from 'phosphor-react';

export function Header() {
  return(
    <HeaderContainer>
        <img src={logo} alt="Coffee Delivery Logo" />
        <nav>
          <LocationNavLink href='/' title='location'>
            <MapPin size={22} weight="fill" />
            <span>Montreal, QC</span>
          </LocationNavLink>
          <CartNavLink href='/checkout' title='checkout'>
            <ShoppingCart size={22} weight="fill"/>
          </CartNavLink>
        </nav>
    </HeaderContainer>
  );
}