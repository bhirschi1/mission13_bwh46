import React from 'react';
import { Link } from 'react-router-dom';
function Podcasts() {
  return (
    <>
      <h1 className="display-4" style={{ paddingLeft: '10px' }}>
        Welcome to Podcasts!
      </h1>
      <h3 className="lead" style={{ paddingLeft: '10px' }}>
        Follow the link to the{' '}
        <Link to={'https://baconsale.com/'} target="_blank">
          Baconsale site
        </Link>
        , one of Joel's favorites.
      </h3>
    </>
  );
}

export default Podcasts;
