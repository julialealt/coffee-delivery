import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react';
import heroImg from '../../assets/images/hero.svg'
import { CoffeeCard } from './components/coffeeCard';
import data from '../../../data.json'

import { BannerContainer, BannerContent, BannerItem, BannerItemsContainer, BannerTitle, CoffeeList, CoffeeListContainer, HomeContainer, IconContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <BannerContainer>
        <BannerContent>
          <BannerTitle>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <span>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</span>
          </BannerTitle>
          
          <BannerItemsContainer>
            <div>
              <BannerItem>
                <IconContainer variant='yellow-dark'>
                  <ShoppingCart size={16} weight='fill' />
                </IconContainer>
                <span>Compra simples e segura</span>
              </BannerItem>

              <BannerItem>
                <IconContainer variant='yellow'>
                  <Timer size={16} weight='fill' />
                </IconContainer>
                <span>Entrega rápida e rastreada</span>
              </BannerItem>
            </div>

            <div>
              <BannerItem>
                <IconContainer variant='base-text'>
                  <Package size={16} weight='fill' />
                </IconContainer>
                <span>Embalagem mantém o café intacto</span>
              </BannerItem>

              <BannerItem>
                <IconContainer variant='purple'>
                  <Coffee size={16} weight='fill' />
                </IconContainer>
                <span>O café chega fresquinho até você</span>
              </BannerItem>
            </div>
          </BannerItemsContainer>
        </BannerContent>

        <img src={heroImg} alt=""/>
      </BannerContainer>

      <CoffeeListContainer>
        <h1>Nossos cafés</h1>
        <CoffeeList>
          {data.coffees.map((item) => {
            return (
              <CoffeeCard 
                key={item.id}
                title={item.title}
                description={item.description}
                tags={item.tags}
                price={item.price}
                imageUrl={item.image}
              />
            )
          })}
        </CoffeeList>
      </CoffeeListContainer>
    </HomeContainer>
  )
}