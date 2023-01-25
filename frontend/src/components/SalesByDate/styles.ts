import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--primary-color);
  border-radius: 10px;
  height: 390px;
  padding: 25px 15px 50px 30px;
`;

export const Title = styled.h4`
  font-size: 24px;
  color: var(--light-color);
  margin-bottom: 5px;
`;

export const Period = styled.span`
  color: var(--gray-light-100-color);
`;

export const Data = styled.div`
  height: 240px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Quantity = styled.h2`
  font-size: 36px;
  color: var(--light-color);
`;

export const QuantityLabel = styled.span`
  color: var(--green-color);
  font-size: 18px;
  display: block;
  margin-bottom: 10px;
`;

export const QuantityDescription = styled.span`
  font-size: 18px;
  color: var(--gray-light-100-color);
`;

export const Chart = styled.div`
  width: 890px;
`;
