import { createContext, useState, type ReactNode } from "react";

export interface SelectedCoffee {
  id: string;
  title: string;
  price: number;
  image: string;
  count: number;
}

interface CartContextType {
  cart: SelectedCoffee[];
  addCoffeeToCart: (coffee: SelectedCoffee) => void;
  removeCoffeeFromCart: (coffee: SelectedCoffee) => void;
  changeCoffeeCount: (coffee: SelectedCoffee, counter: number) => void;
  resetCart: () => void;
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<SelectedCoffee[]>([])

  function addCoffeeToCart(coffee: SelectedCoffee) {
    setCart((state) => {
      const index = state.findIndex(item => item.title === coffee.title);
  
      if (index !== -1) {
        const updatedCart = state.map((item, i) => 
          i === index
            ? { ...item, count: item.count + coffee.count } 
            : item
        );
        return updatedCart;        
      } else {
        return [...state, coffee];
      }
    });
  }

  function changeCoffeeCount(coffee: SelectedCoffee, counter: number) {
    setCart((state) => {
      const index = state.findIndex(item => item.title === coffee.title);
  
      if (index !== -1) {
        const updatedCart = state.map((item, i) => 
          i === index
            ? { ...item, count: counter } 
            : item
        );
        return updatedCart;        
      } else {
        return [...state, coffee];
      }
    });
  }

  function removeCoffeeFromCart(coffee: SelectedCoffee) {
    const newCart = cart.filter(item => item.title !== coffee.title);
    setCart(newCart);
  }

  function resetCart() {
    setCart([])
  }

  return (
    <CartContext.Provider value={{ cart, addCoffeeToCart, changeCoffeeCount, removeCoffeeFromCart, resetCart }}>
      {children}
    </CartContext.Provider>
  )
}