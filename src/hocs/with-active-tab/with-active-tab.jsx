import React, {useCallback, useState} from "react";

import Overview from "../../components/overview/overview";
import Details from "../../components/details/details";
import Reviews from "../../components/reviews/reviews";
const DEFAULT_ACTIVE = `Overview`;

const TabMap = {
  [`Overview`]: Overview,
  [`Details`]: Details,
  [`Reviews`]: Reviews
};

const withActiveTab = (Component) => {
  const WithActiveTab = (props) => {
    const [activeNavItem, setActiveNavItem] = useState(DEFAULT_ACTIVE);

    const handleNavItemChange = useCallback((newActiveItem) => {
      setActiveNavItem(newActiveItem);
    });

    const Tab = TabMap[activeNavItem];
    return (
      <Component
        {...props}
        activeNavItem={activeNavItem}
        onNavItemChange={handleNavItemChange}
        renderTab={(currentMovie, movieReviews) => (
          <Tab
            movie={currentMovie}
            movieReviews={movieReviews}
          />
        )}
      />
    );
  };
  return WithActiveTab;
};

export default withActiveTab;
