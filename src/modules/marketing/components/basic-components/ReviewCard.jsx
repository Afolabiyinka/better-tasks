import { Card, Typography, CardBody, Avatar } from "@material-tailwind/react";
import StarRating from "./StarRating";
function ReviewCard({ review }) {
  return (
    <div className="max-w-lg  h-full p-3 shadow-lg transition-all duration-300 border-none rounded-lg space-y-4">
      <span className="flex gap-2 items-center p-2">
        <Avatar src={review.image} className="ring-1" />
        <Typography variant="h6" className="font-sans text-xl">
          {review.name}
        </Typography>
      </span>
      <Typography className="my-1">{review.review}</Typography>
      <StarRating rating={review.rating} />
    </div>
  );
}

export default ReviewCard;
