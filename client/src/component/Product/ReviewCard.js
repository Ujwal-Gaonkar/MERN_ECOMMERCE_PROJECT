import { Rating } from "@material-ui/lab";
import React from "react";
import './reviewCard.css'
const ReviewCard = ({ review }) => {
  const options = {
    value: review.rating,
    readOnly: true,
    precision: 0.5,
  };

  return (
    <div className="reviewCard">
      <img src={"/Profile.png"}
           alt="" />
      <p>{review.name}</p>
      <Rating{...options} />
      <span className="reviewCardComment">{review.comment}</span>
    </div>
  );
};

export default ReviewCard;