import styled from "styled-components";
import { mixins } from "../../styles/mixins";
import  * as RadioGroup from "@radix-ui/react-radio-group";

export const CheckoutContainer = styled.form`
  display: flex;
  justify-content: flex-start;
  padding: 2.5rem 10rem;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  gap: 2rem;
`;

export const EmptyState = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  h1 {
    ${mixins.fonts.titleL}
    color: ${props => props.theme.colors["base-title"]};
  }

  span {
    ${mixins.fonts.textM}
    font-size: 1rem;
    color: ${props => props.theme.colors["base-subtitle"]};
  }
`;

export const CompleteYourOrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 640px;
  gap: 1rem;

  strong {
    ${mixins.fonts.titleXS}
  }
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  input {
    border-radius: 6px;
    border: 0;
    width: 100%;
    background: ${props => props.theme.colors["base-input"]};
    color: ${props => props.theme.colors["base-text"]};
    padding: 0.75rem;

    &::placeholder {
      color: ${props => props.theme.colors["base-label"]};
    }
  }

  div {
    display: flex;
    gap: 0.75rem;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 2.5rem;
  gap: 2rem;
  border-radius: 6px;
  background-color: ${props => props.theme.colors["base-card"]};
`;

export const TitleFormContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 0.5rem;
`;

export const TitleForm = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    ${mixins.fonts.textM}
    color: ${props => props.theme.colors["base-subtitle"]};
  }

  span {
    ${mixins.fonts.textS}
    color: ${props => props.theme.colors["base-text"]};
  }
`;

export const PaymentType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  gap: 1rem;
`;

export const PaymentTypeButton = styled(RadioGroup.Item)`
  width: 100%;
  color: ${props => props.theme.colors["base-text"]}; 
  background-color: ${props => props.theme.colors["base-button"]};
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;
  border-radius: 6px;
  cursor: pointer;
  border: 0;
  
  span {
    ${mixins.fonts.buttonM}
    white-space: nowrap;
  }
  
  svg {
    color: ${props => props.theme.colors.purple};
  }

  &[data-state='unchecked']:hover {
    background-color: ${props => props.theme.colors["base-hover"]};
    transition: background-color 0.2s;
  }

  &[data-state='checked'] {
    background-color: ${props => props.theme.colors["purple-light"]};
    border: 1px solid ${props => props.theme.colors.purple};
  }
`;

export const SelectedCoffeesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 448px;
  gap: 1rem;

  strong {
    ${mixins.fonts.titleXS}
  }
`;

export const SelectedCoffeesCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 2.5rem;
  gap: 1.5rem;
  border-radius: 6px 36px;
  background-color: ${props => props.theme.colors["base-card"]};

  button[type="submit"] {
    height: 46px;
    border: 0;
    width: 100%;
    ${mixins.fonts.buttonG}
    background: ${props => props.theme.colors.yellow};
    color: ${props => props.theme.colors.white};
    font-weight: bold;
    padding: 0.75rem;
    border-radius: 6px;
    cursor: pointer;

    &:hover {
      background: ${props => props.theme.colors["yellow-dark"]};
      transition: background-color 0.2s;
    }
  }
`;

export const CoffeeContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1.25rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${props => props.theme.colors["base-button"]};

  strong {
    ${mixins.fonts.textM}
    font-weight: bold;
  }
`;

export const CoffeeInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  ${mixins.fonts.textM}

  div {
    display: flex;
    gap: 0.5rem;
  }
`;

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  padding: 6.5px 8px;
  gap: 0.25rem;
  border-radius: 6px;
  ${mixins.fonts.textS}
  color: ${props => props.theme.colors["base-text"]};
  background-color: ${props => props.theme.colors["base-button"]};

  &:hover {
    background-color: ${props => props.theme.colors["base-hover"]};
    transition: background-color 0.2s;
  }
`;

export const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.75rem;

  div {
    display: flex;
    justify-content: space-between;
    color: ${props => props.theme.colors["base-text"]};

    span {
      ${mixins.fonts.textS}
    }

    strong {
      ${mixins.fonts.textL}
      font-weight: bold;
    }
  }
`;