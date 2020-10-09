const REVIEW_COUNT = 10;

const generateReview = (id) => {
  return `Some text review ${id}`;
};

const genereteReviews = () => {
  const reviews = [];
  for (let i = 0; i < REVIEW_COUNT; i++) {
    reviews.push(generateReview(i + 1));
  }

  return reviews;
};

const reviews = genereteReviews();

export {reviews};
