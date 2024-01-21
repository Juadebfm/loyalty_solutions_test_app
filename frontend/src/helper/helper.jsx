export const generateRandomStarRating = () => {
  const randomStars = Math.floor(Math.random() * (5 - 2 + 1)) + 2;

  return Array.from({ length: randomStars }, (_, index) => (
    <span key={index} className="rating-star">
      ★
    </span>
  ));
};
