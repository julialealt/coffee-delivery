import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const SuccessContainer = styled.main`
  display: flex;
  width: 100%;
  max-width: 1440px;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  margin: 0 auto;
`;

export const SuccessContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

export const SuccessMessage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  strong {
    ${mixins.fonts.titleL}
    color: ${props => props.theme.colors["yellow-dark"]};
  }

  span {
    ${mixins.fonts.textL}
  }
`;

export const DataCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2.5rem;
  background: transparent;
  border-radius: 6px 36px;
  border: 2px solid ${props => props.theme.colors.purple};
`;

export const DataCardItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.75rem;

  div {
    display: flex;
    flex-direction: column;
  }

  span {
    ${mixins.fonts.textM};
    font-weight: 500;
    color: ${props => props.theme.colors["base-text"]};
  }
`;

interface IconContainerProps {
  variant: 'yellow-dark' | 'yellow' | 'purple';
}

export const IconContainer = styled.div<IconContainerProps>`
  padding: 0.5rem;
  color: ${props => props.theme.colors.white};
  border-radius: 999px;
  background-color: ${props => props.theme.colors[props.variant]};
`;