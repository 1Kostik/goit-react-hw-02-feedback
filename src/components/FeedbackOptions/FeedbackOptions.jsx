import PropTypes from 'prop-types';
import { ButtonList, ButtonItem, Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({options, onLeaveFeedback}) => {
  return (
    <ButtonList>
      {options.map((option, index) => {
        const label = option.charAt(0).toUpperCase() + option.slice(1);
        return (
          <ButtonItem key={index}>
            <Button type="button" onClick={() => onLeaveFeedback(option)}>
              {label}
            </Button>
          </ButtonItem>
        );
      })}
    </ButtonList>
  );
};
export default FeedbackOptions;

FeedbackOptions.protoTypes = {

  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
  
};