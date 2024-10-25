import React from 'react';
import { ReactComponent as StarIcon } from '../assets/icons/star.svg';

interface ReviewStarIconProps {
  filled?: boolean;
}

const ReviewStar: React.FC<ReviewStarIconProps> = ({ filled }) => {
  return (
    <StarIcon
      className={`w-7.5 h-7.5 ${filled ? 'text-[#52B480]' : 'text-gray-300'}`}
      fill="currentColor"
    />
  );
};

export default ReviewStar;
