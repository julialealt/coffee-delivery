import { useContext } from "react"
import { CartContext } from "../contexts/CartContext"

export function useTotal() {
  const { cart } = useContext(CartContext)
  
  const total = cart.reduce(
    (acc, coffee) => {
      acc.totalPrice += (coffee.price * coffee.count)
      return acc
    },
    {
      totalPrice: 0
    }
  )

  return total
}