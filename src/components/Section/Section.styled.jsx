import styled from '@emotion/styled';

export const Container = styled.section`
  max-width: 100%;
  padding: 20px;
  text-align: center;

  :nth-of-type(1) {
    box-shadow: var(--main-shadow);
    border-radius: 10px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 40px;
  color: var(--primary);
  text-shadow: var(--main-shadow);
`;
