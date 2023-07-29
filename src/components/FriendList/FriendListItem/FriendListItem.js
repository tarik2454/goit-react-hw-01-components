import { styled } from 'styled-components';

export const Status = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: transparent;
`;

export const Online = styled.div`
  &::after {
    display: block;
    content: '';
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: red;
  }
`;

export const Offline = styled.div`
  &::after {
    display: block;
    content: '';
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: blue;
  }
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

export const Avatar = styled.img``;

export const Name = styled.p`
  font-weight: bold;
  color: $primiry-text-color;
`;
