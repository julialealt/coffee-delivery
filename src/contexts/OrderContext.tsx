import { createContext, useContext, useState, type ReactNode } from "react";
import { CartContext, type SelectedCoffee } from "./CartContext";
import type { newOrderInputs } from "../pages/checkout";

export interface Order {
  id: string;
  cart: SelectedCoffee[];
  zipCode: number;
  street: string;
  number: string;
  complement: string;
  district: string;
  city: string;
  state: string;
  payment: 'credit' | 'debit' | 'cash';
}

interface OrderContextType {
  order?: Order;
  createNewOrder: (data: newOrderInputs) => void;
}

export const OrderContext = createContext({} as OrderContextType)

interface OrderContextProviderProps {
  children: ReactNode
}

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [order, setOrder] = useState<Order | undefined>()

  const { cart } = useContext(CartContext)

  function createNewOrder(data: newOrderInputs) {
    const { zipCode, street, number, complement, district, city, state, payment } = data

    const newOrder = {
      id: new Date().toISOString(),
      cart: cart,
      zipCode,
      street,
      number,
      complement,
      district,
      city,
      state,
      payment,
    }

    setOrder(newOrder)
  }

  return (
    <OrderContext.Provider value={{ order, createNewOrder }}>
      {children}
    </OrderContext.Provider>
  )
}