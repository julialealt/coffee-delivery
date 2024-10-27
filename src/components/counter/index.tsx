import { CounterContainer, Button, NumberDisplay } from "./styles";

interface CounterProps {
  counter: number;
  handleIncrementCounter: () => void;
  handleDecrementCounter: () => void;
}

export function Counter({ counter, handleIncrementCounter, handleDecrementCounter }: CounterProps) {
  
  return (
    <CounterContainer>
      <Button onClick={handleDecrementCounter}>-</Button>
      <NumberDisplay>{counter}</NumberDisplay>
      <Button onClick={handleIncrementCounter}>+</Button>
    </CounterContainer>
  );
}