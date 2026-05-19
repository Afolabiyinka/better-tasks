import { Card, Typography, CardBody, Avatar } from "@material-tailwind/react";
import StarRating from "./StarRating";
function ReviewCard({ review }) {
  return (
    <div className="max-w-lg  h-full p-3 shadow-none transition-all duration-300 border-none rounded-lg space-y-4">
      <span className="flex gap-2 items-center p-2">
        <Avatar src={review.image} className="ring-1" />
        <Typography
          variant="h6"
          className="font-sans text-xl font-bold tracking-wide"
        >
          {review.name}
        </Typography>
      </span>
      <Typography>{review.review}</Typography>
      <StarRating rating={review.rating} />
    </div>
  );
}

export default ReviewCard;
