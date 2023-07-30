import styled from 'styled-components';

export const ProfileCard = styled.div`
  width: 320px;
  height: auto;
  border-radius: 2%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 30px;
  background-color: $secondary-bg-color;
`;

export const Avatar = styled.img`
  width: 150px;
  margin-bottom: 25px;
  border-radius: 50%;
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: $secondary-text-color;
`;

export const Stats = styled.ul`
  display: flex;
  width: 100%;
  background-color: #eef8ff;
  border-top: 1px solid silver;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  width: 33.3333%;
  padding: 15px 0;
  /* color: ${props => (props.$color ? props.$color : 'blue')}; */

  &:not(:last-child) {
    border-right: 1px solid silver;
  }
`;

console.dir(StatsItem);

export const Quantity = styled.span`
  font-weight: bold;
  color: $secondary-text-color;
`;
