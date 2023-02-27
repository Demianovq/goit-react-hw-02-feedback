import PropTypes from 'prop-types';
import { Btn, BtnBlock } from './FeedbackOptions.style';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <BtnBlock>
      {options.map(key => {
        return (
          <Btn type="button" key={key} onClick={onLeaveFeedback}>
            {key}
          </Btn>
        );
      })}
    </BtnBlock>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
