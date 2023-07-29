import styled from 'styled-components';

export const StatisticsWrapper = styled.div`
  width: 400px;
  background-color: $secondary-bg-color;
  border-radius: 2px;
  overflow: hidden;
`;

export const Title = styled.h2`
  margin: 30px 0;
  text-align: center;
`;

export const StatList = styled.ul`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 7px 0 7px;
  color: $white;
`;
