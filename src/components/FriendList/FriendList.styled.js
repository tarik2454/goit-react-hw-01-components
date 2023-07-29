import { styled } from 'styled-components';

export const Status = styled.div`
  position: relative;
  width: 15px;
  height: 15px;
  display: block;
  border-radius: 50%;

  &::before {
    content: '';
    position: absolute;
    width: 15px;
    height: 15px;
    border-radius: 50%;
  }
`;

export const Online = styled.div`
  background-color: red;
`;

export const Offline = styled.div`
  background-color: blue;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  width: 280px;
  gap: 15px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px;
  background-color: $secondary-bg-color;
  box-shadow: 0px 3px 8px 0px rgba(140, 140, 140, 1);
  border-radius: 3px;
`;

export const Name = styled.p`
  font-weight: bold;
  color: $primiry-text-color;
`;
