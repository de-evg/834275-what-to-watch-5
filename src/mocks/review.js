const REVIEW_COUNT = 10;

const generateReview = (id) => ({
  text: `Some text review ${id}`,
  date: new Date(),
  author: `User ${id}`,
  userRating: `8,9`
});

const genereteReviews = () => {
  const reviews = [];
  for (let i = 0; i < REVIEW_COUNT; i++) {
    reviews.push(generateReview(i + 1));
  }

  return reviews;
};

const reviews = genereteReviews();

export {reviews};
