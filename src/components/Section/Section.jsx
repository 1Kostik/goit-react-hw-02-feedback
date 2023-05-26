import PropTypes from 'prop-types';
import { Container, Title } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <Container>
      {title && <Title>{title}</Title>}
      {children}
    </Container>
  );
};

Section.propTypes = {
  title: PropTypes.string,
};
