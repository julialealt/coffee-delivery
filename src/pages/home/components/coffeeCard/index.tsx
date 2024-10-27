import { CardContainer, CardImage, CardPriceContainer, CardTag, CardTextContainer, CartButton, CartContainer, Price, TagsContainer } from "./styles";
import { ShoppingCart } from "@phosphor-icons/react";
import { Counter } from "../../../../components/counter";
import { useContext, useState } from "react";
import { CartContext, type SelectedCoffee } from "../../../../contexts/CartContext";
import { priceFormatter } from "../../../../utils/formatter";

interface CoffeeCardProps {
  title: string;
  description: string;
  tags: string[];
  price: number;
  imageUrl: string;
}

export function CoffeeCard({ title, description, tags, price, imageUrl }: CoffeeCardProps) {
  const { addCoffeeToCart } = useContext(CartContext)

  const [counter, setCounter] = useState(1);

  function handleIncrementCounter() {
    setCounter((state) => state + 1)
  }

  function handleDecrementCounter() {
    setCounter((state) => {
      if (state > 1) {
        return (state - 1)
      } 
      return state
    })
  }

  function handleAddCoffeeToCart() {
    const coffee: SelectedCoffee = {
      id: new Date().toISOString(),
      title,
      price,
      image: imageUrl,
      count: counter
    }
    addCoffeeToCart(coffee)
    setCounter(1)
  }
  
  return (
    <CardContainer>
      <CardImage src={imageUrl} alt="" />

      <TagsContainer>
        {tags.map((tag) => {
          return <CardTag key={tag}>{tag.toUpperCase()}</CardTag>;
        })}
      </TagsContainer>

      <CardTextContainer>
        <strong>{title}</strong>
        <span>{description}</span>
      </CardTextContainer>

      <CardPriceContainer>
        <Price>
          <strong>{priceFormatter.format(price)}</strong>
        </Price>
        <CartContainer>
          <Counter counter={counter} handleIncrementCounter={handleIncrementCounter} handleDecrementCounter={handleDecrementCounter} />
          <CartButton onClick={() => handleAddCoffeeToCart()}>
            <ShoppingCart size={20} weight="fill" />
          </CartButton>
        </CartContainer>
      </CardPriceContainer>
    </CardContainer>
  )
}