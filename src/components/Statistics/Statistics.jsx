import PropTypes from 'prop-types';

import { Name, ResultList, ResultItem, Rate } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ResultList>
      <ResultItem>
        <Name>Good:</Name>
        <Rate>{good}</Rate>
      </ResultItem>
      <ResultItem>
        <Name>Neutral:</Name>
        <Rate>{neutral}</Rate>
      </ResultItem>
      <ResultItem>
        <Name>Bad:</Name>
        <Rate>{bad}</Rate>
      </ResultItem>
      <ResultItem>
        <Name>Total:</Name>
        <Rate>{total}</Rate>
      </ResultItem>
      <ResultItem>
        <Name>Positive feedback:</Name>
        <Rate>{positivePercentage}%</Rate>
      </ResultItem>
    </ResultList>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};