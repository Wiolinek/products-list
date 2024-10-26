import { ReactComponent as StarIcon } from 'assets/icons/star.svg';

interface ReviewStarProps {
  filled?: boolean;
}

const ReviewStar = ({ filled }: ReviewStarProps) => {
  return (
    <StarIcon
      className={`w-7.5 h-7.5 ${filled ? 'text-[#52B480]' : 'text-gray-300'}`}
      fill="currentColor"
    />
  );
};

export default ReviewStar;
