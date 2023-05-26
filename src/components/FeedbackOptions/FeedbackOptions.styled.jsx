import styled from '@emotion/styled';
export const ButtonList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;
export const ButtonItem = styled.li`
:hover:nth-of-type(1) button {
   background-color: var(--good);
   }
   :hover:nth-of-type(2) button {
    background-color: var(--neutral);
   }
   :hover:nth-of-type(3) button {
    background-color: var(--bad);
   }
`;
export const Button = styled.button`
padding: 5px 25px;
  font-size: 24px;
  color: var(--accent);
  background-color: transparent;
  border-radius: 5px;
  border: 1px solid var(--accent);
  box-shadow: var(--main-shadow);
  transition: all 250ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
  cursor: pointer; 
`;
