import styled from 'styled-components';

export const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.theme.colors['base-button']};
  border-radius: 8px;
  padding: 0.25rem 0.5rem;
  width: fit-content;
`;

export const Button = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.colors.purple};
  font-size: 1.25rem;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.colors['purple-dark']};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const NumberDisplay = styled.span`
  font-size: 0.875rem;
  color: #000;
  margin: 0 8px;
`;