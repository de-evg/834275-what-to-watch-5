const REVIEW_COUNT = 10;
const FILMS_COUNT = 10;

const generateReview = (id) => ({
  id,
  text: `Some text review ${id}`,
  date: new Date(),
  author: `User ${id}`,
  userRating: `8,9`
});

const genereteReviews = () => {
  const review = {};
  for (let i = 0; i < FILMS_COUNT; i++) {
    const movies = [];
    for (let j = 0; j < REVIEW_COUNT; j++) {
      movies.push(generateReview(j + 1));
    }
    review[i] = movies;
  }

  return review;
};

const review = genereteReviews();

export {review};
