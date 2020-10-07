const REVIEW_COUNT = 10;

const generateReview = (id) => {
  return `Review ${id}`;
};

const genereteReviews = () => {
  const reviews = [];
  for (let i = 0; i < REVIEW_COUNT; i++) {
    reviews.push(generateReview());
  }

  return reviews;
};

const reviews = genereteReviews();

export {reviews};
