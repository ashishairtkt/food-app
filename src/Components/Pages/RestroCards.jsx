import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const RestroCards = ({
  imageUrl,
  name,
  cuisine,
  rating,
  deliveryTime,
  priceForTwo,
  onViewDetails,
}) => {
  const isDataAvailable =
    imageUrl && name && cuisine && rating && deliveryTime && priceForTwo;

  return (
    <a href="#" className="url-tag">
      <div className="restrocard-container">
        <div className="restro-img">
          {isDataAvailable ? (
            <img src={imageUrl} alt="restro-img" />
          ) : (
            <Skeleton width={250} height={200} />
          )}
        </div>
        <div className="details">
          {isDataAvailable ? (
            <>
              <h4>{name}</h4>
              <p>{cuisine}</p>

              <div className="details-para">
                <div className="star-rating">
                  &nbsp;<i className="fa-solid fa-star"></i> {rating}
                </div>
                <div className="timing">• &nbsp;{deliveryTime}</div>
                <div className="priceApprox">• &nbsp;{priceForTwo} FOR TWO</div>
              </div>
            </>
          ) : (
            <div>
              <Skeleton width={250} height={15} />
              <Skeleton width={200} height={10} />
              <Skeleton width={250} height={10} />
            </div>
          )}
        </div>

        <div className="restro-card-bottom" onClick={onViewDetails}>
          {isDataAvailable ? (
            "QUICK VIEW"
          ) : (
            <Skeleton width={100} height={30} />
          )}
        </div>
      </div>
    </a>
  );
};

export default RestroCards;
