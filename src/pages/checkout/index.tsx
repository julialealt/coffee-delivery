import { useContext } from "react";
import { Controller, useForm } from "react-hook-form";
import * as zod from 'zod'
import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money, Trash } from "@phosphor-icons/react";
import { Counter } from "../../components/counter";
import { CartContext, type SelectedCoffee } from "../../contexts/CartContext";
import { useTotal } from "../../hooks/useTotal";
import { priceFormatter } from "../../utils/formatter";
import emptyCartImg from "../../assets/empty-cart.svg"
import { zodResolver } from "@hookform/resolvers/zod";
import { OrderContext } from "../../contexts/OrderContext";

import { FormContainer, CheckoutContainer, CompleteYourOrderContainer,  SelectedCoffeesContainer, TitleForm, TitleFormContainer, PaymentType, PaymentTypeButton, SelectedCoffeesCard, CoffeeContainer, TotalContainer, CoffeeInfo, RemoveButton, EmptyState, InputsContainer } from "./styles";
import { useNavigate } from "react-router-dom";


const newOrderSchema = zod.object({
  zipCode: zod.number({ invalid_type_error: 'Informe o CEP' }),
  street: zod.string().min(1, 'Informe a rua'),
  number: zod.string().min(1, 'Informe o número'),
  complement: zod.string(),
  district: zod.string().min(1, 'Informe o bairro'),
  city: zod.string().min(1, 'Informe a cidade'),
  state: zod.string().min(1, 'Informe a UF'),
  payment: zod.enum(['credit', 'debit', 'cash'], { invalid_type_error: 'Informe um método de pagamento', }),
})

export type newOrderInputs = zod.infer<typeof newOrderSchema>

export function Checkout() {
  const { register, handleSubmit, control, formState: { isSubmitting }, reset } = useForm<newOrderInputs>({
    resolver: zodResolver(newOrderSchema)
  })

  const navigate = useNavigate()

  const { createNewOrder } = useContext(OrderContext)

  const { cart, changeCoffeeCount, removeCoffeeFromCart, resetCart } = useContext(CartContext)
  const total = useTotal()
  const delivery = 3.5
  const isCartEmpty = cart.length === 0

  function handleRemoveCoffeeFromCart(coffee: SelectedCoffee) {
    removeCoffeeFromCart(coffee)
  }

  function handleChangeCoffeeCount(coffee: SelectedCoffee, count: number) {
    if (count > 0) {
      changeCoffeeCount(coffee, count)
    }
  }

  function handleConfirmOrder(data: newOrderInputs) {
    createNewOrder(data)
    resetCart()
    reset()
    navigate('/success')
  }

  return (
    <>
      { isCartEmpty 
        ? (
          <CheckoutContainer>
            <EmptyState>
              <img src={emptyCartImg} alt="Empty cart" width={300} />
              <div>
                <h1>Seu carrinho está vazio!</h1>
                <span>Adicione cafés para fazer seu pedido...</span>
              </div>
            </EmptyState>
          </CheckoutContainer>
        ) 
        : (
          <CheckoutContainer onSubmit={handleSubmit(handleConfirmOrder)}>
            <CompleteYourOrderContainer>
              <strong>Complete seu pedido</strong>

              <FormContainer>
                <TitleFormContainer>
                  <MapPinLine size={20} color='#C47F17' />
                  <TitleForm>
                    <strong>Endereço de Entrega</strong>
                    <span>Informe o endereço onde deseja receber seu pedido</span>
                  </TitleForm>
                </TitleFormContainer>

                <InputsContainer>
                  <input type="number" placeholder="CEP" {...register('zipCode', { valueAsNumber: true })} />
                  <input type="text" placeholder="Rua" {...register('street')} />
                  <div>
                    <input type="text" placeholder="Número" {...register('number')} />
                    <input type="text" placeholder="Complemento" {...register('complement')} />
                  </div>
                  <div>
                    <input type="text" placeholder="Bairro" {...register('district')} />
                    <input type="text" placeholder="Cidade" {...register('city')} />
                    <input type="text" placeholder="UF" {...register('state')} />
                  </div>
                </InputsContainer>
              </FormContainer>

              <FormContainer>
                <TitleFormContainer>
                  <CurrencyDollar size={20} color='#8047F8' />
                  <TitleForm>
                    <strong>Pagamento</strong>
                    <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
                  </TitleForm>
                </TitleFormContainer>

                <InputsContainer>
                  <Controller 
                    control={control}
                    name="payment"
                    render={({ field }) => {
                      return (
                        <PaymentType
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <PaymentTypeButton value="credit">
                            <CreditCard size={16} />
                            <span>CARTÃO DE CRÉDITO</span>
                          </PaymentTypeButton>
                          <PaymentTypeButton value="debit">
                            <Bank size={16} />
                            <span>CARTÃO DE DÉBITO</span>
                          </PaymentTypeButton>
                          <PaymentTypeButton value="cash">
                            <Money size={16} />
                            <span>DINHEIRO</span>
                          </PaymentTypeButton>
                        </PaymentType>
                      )
                    }}
                  />
                </InputsContainer>
              </FormContainer>
            </CompleteYourOrderContainer>
            <SelectedCoffeesContainer>
              <strong>Cafés selecionados</strong>
              <SelectedCoffeesCard>
                {cart.map((coffee) => {
                  return (
                    <CoffeeContainer key={coffee.id}>
                      <img src={coffee.image} style={{ height: '64px' }} />
                      <CoffeeInfo>
                        {coffee.title}
                        <div>
                          <Counter
                            counter={coffee.count}
                            handleIncrementCounter={() => handleChangeCoffeeCount(coffee, coffee.count+1)}
                            handleDecrementCounter={() => handleChangeCoffeeCount(coffee, coffee.count-1)} />
                          <RemoveButton type="button" onClick={() => handleRemoveCoffeeFromCart(coffee)}>
                            <Trash size={14} color="#8047F8" />
                            REMOVER
                          </RemoveButton>
                        </div>
                      </CoffeeInfo>
                      <strong>{priceFormatter.format((coffee.price) * (coffee.count))}</strong>
                    </CoffeeContainer>
                  );
                })}

                <TotalContainer>
                  <div>
                    <span>Total de itens</span>
                    <span>{priceFormatter.format(total.totalPrice)}</span>
                  </div>
                  <div>
                    <span>Entrega</span>
                    <span>{priceFormatter.format(delivery)}</span>
                  </div>
                  <div>
                    <strong>Total</strong>
                    <strong>{priceFormatter.format(total.totalPrice + delivery)}</strong>
                  </div>
                </TotalContainer>
                <button type="submit" disabled={isSubmitting}>CONFIRMAR PEDIDO</button>
              </SelectedCoffeesCard>
            </SelectedCoffeesContainer>
          </CheckoutContainer>
        )
      }
    </>
  )
}