import { Aside, HeaderContainer } from "./styles";
import logo from '../../assets/logo.svg'
import { Link } from "react-router-dom";
import { MapPin, ShoppingCart } from "@phosphor-icons/react"
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { OrderContext } from "../../contexts/OrderContext";

export function Header() {
  const { order } = useContext(OrderContext)

  const { cart } = useContext(CartContext)

  const cartLength = cart.reduce(
    (acc, coffee) => {
      acc.length += coffee.count
      return acc
    }, 
    {
      length: 0
    }
  )
  const isCartEmpty = cartLength.length === 0

  return (
    <HeaderContainer>
      <Link to="/">
        <img src={logo} alt="Coffee Delivery" />
      </Link>
      
      <Aside>
        <div>
          <MapPin size={22} weight="fill" />
          { order ? <span>{order.city}, {order.state}</span> : <span>Porto Alegre, RS</span> }
        </div>
        
        <Link to="/checkout" aria-disabled={!isCartEmpty}>
          <ShoppingCart size={22} weight="fill" />
          {isCartEmpty ? '' : <span>{cartLength.length}</span>}
        </Link>
      </Aside>
    </HeaderContainer>
  )
}