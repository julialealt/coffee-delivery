import styled from "styled-components";
import backgroundImg from '../../assets/images/hero-bg.svg'
import { mixins } from "../../styles/mixins";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0 10rem;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  /* background-image: url(${backgroundImg});
  background-size: cover; 
  background-position: center;
  background-repeat: no-repeat; */
`;

export const BannerContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 4rem 0;
  gap: 3.5rem;
`;

export const BannerContent = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 4.125rem;
`;

export const BannerTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    ${mixins.fonts.titleXL}
    color: ${props => props.theme.colors["base-title"]};
  }

  span {
    ${mixins.fonts.textL}
    color: ${props => props.theme.colors["base-subtitle"]};
  }
`;

export const BannerItemsContainer = styled.div`
  display: flex;
  gap: 2.5rem;

  div {
    display: flex;
    flex-wrap: wrap;
    gap: 1.25rem;
  }
`;

export const BannerItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.75rem;

  span {
    ${mixins.fonts.textM};
    font-weight: 500;
    color: ${props => props.theme.colors["base-text"]};
  }
`;

interface IconContainerProps {
  variant: 'yellow-dark' | 'yellow' | 'base-text' | 'purple';
}

export const IconContainer = styled.div<IconContainerProps>`
  padding: 0.5rem;
  color: ${props => props.theme.colors.white};
  border-radius: 999px;
  background-color: ${props => props.theme.colors[props.variant]};
`;

export const CoffeeListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 2rem;
  padding-bottom: 4rem;
  gap: 3.375rem;

  h1 {
    ${mixins.fonts.titleL}
    color: ${props => props.theme.colors["base-title"]};
  }
`;

export const CoffeeList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 2rem;
`;