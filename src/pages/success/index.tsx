import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react';
import successImg from '../../assets/images/delivery.svg'
import { DataCard, DataCardItem, IconContainer, SuccessContainer, SuccessContent, SuccessMessage } from "./styles";
import { useContext } from 'react';
import { OrderContext } from '../../contexts/OrderContext';

export function Success() {
  const { order } = useContext(OrderContext)

  return (
    <SuccessContainer>
      <SuccessContent>
        <SuccessMessage>
          <strong>Uhu! Pedido confirmado</strong>
          <span>Agora é só aguardar que logo o café chegará até você</span>
        </SuccessMessage>

        <DataCard>
          <DataCardItem>
            <IconContainer variant='purple'>
              <MapPin size={18} weight='fill' />
            </IconContainer>
            <div>
              <span>Entrega em <strong>{order?.street}, {order?.number} { order?.complement && <strong>{order?.complement}</strong> }</strong></span>
              <span>{order?.district} - {order?.city}, {order?.state}</span>
            </div>
          </DataCardItem>

          <DataCardItem>
            <IconContainer variant='yellow'>
              <Timer size={18} weight='fill' />
            </IconContainer>
            <div>
              <span>Previsão de entrega</span>
              <strong>20 min - 30 min</strong>
            </div>
          </DataCardItem>

          <DataCardItem>
            <IconContainer variant='yellow-dark'>
              <CurrencyDollar size={18} />
            </IconContainer>
            <div>
              <span>Pagamento na entrega</span>
              { order?.payment === 'credit' && <strong>Cartão de Crédito</strong> }
              { order?.payment === 'debit' && <strong>Cartão de Débito</strong> }
              { order?.payment === 'cash' && <strong>Dinheiro</strong> }
            </div>
          </DataCardItem>
        </DataCard>
      </SuccessContent>

      <img src={successImg} alt=""/>
    </SuccessContainer>
  )
}