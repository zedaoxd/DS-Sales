import styled from "styled-components";

export const Container = styled.div`
  margin: 30px 0 40px 0;
  background-color: var(--primary-color);
  border-radius: 10px;
  height: 80px;
  display: flex;
  align-items: center;
  padding-left: 30px;

  & .filter-input {
    height: 45px;
    background-color: var(--secundary-color);
    color: var(--gray-light-50-color);
    font-size: 16px;
    border: 1px solid var(--gray-light-100-color);
    border-radius: 10px;
    width: 250px;
    padding: 12px 5px 12px 20px;

    & + .filter-input {
      margin-left: 55px;
    }

    &::placeholder {
      font-size: 16px;
      color: var(--gray-light-50-color);
    }
  }
`;
