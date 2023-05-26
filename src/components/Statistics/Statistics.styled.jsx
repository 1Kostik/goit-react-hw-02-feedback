import styled from '@emotion/styled';

export const ResultList = styled.ul`
margin: 0 auto;
  max-width: 320px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const ResultItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Name = styled.span`
  text-align: left;
  font-size: 24px;
  color: var(--secondary);
  text-shadow: var(--main-shadow);
`;
export const Rate = styled.span`
  text-align: left;
  font-size: 32px;
  font-weight: 500;
  color: var(--accent);
  text-shadow: var(--main-shadow);
`;