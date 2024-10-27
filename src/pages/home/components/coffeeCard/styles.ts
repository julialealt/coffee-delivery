import styled from "styled-components";
import { mixins } from "../../../../styles/mixins";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.theme.colors["base-card"]};
  border-radius: 6px 36px;
  padding: 1.25rem;
  gap: 1rem;
  width: 256px;
`;

export const CardImage = styled.img`
  margin-top: -2.5rem;
`;

export const TagsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const CardTag = styled.span`
  ${mixins.fonts.tag}
  background-color: ${props => props.theme.colors["yellow-light"]};
  color: ${props => props.theme.colors["yellow-dark"]};
  padding: 0.25rem 0.5rem;
  border-radius: 999px;
`;

export const CardTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.5rem;

  strong {
    ${mixins.fonts.titleS}
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 0;

    span {
      ${mixins.fonts.textS}
    }
  }
`;

export const CardPriceContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const Price = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  strong {
    ${mixins.fonts.titleM}
  }
`;

export const CartContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const CartButton = styled.button`
  color: ${props => props.theme.colors["base-card"]};
  background-color: ${props => props.theme.colors["purple-dark"]};
  padding: 0.5rem;
  line-height: 0;
  border-radius: 6px;
`;