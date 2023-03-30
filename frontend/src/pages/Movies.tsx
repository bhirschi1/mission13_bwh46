import React, { useState } from 'react';
import data from '../MoviesData.json';

const md = data.MovieData;

function Movies() {
  const [movieList] = useState(md);
  return (
    <>
      <div>
        <h1 className="display-4" style={{ paddingLeft: '10px' }}>
          Welcome to Joel Hilton's Movie List!
        </h1>
      </div>

      <div>
        <table className="table table-striped">
          <thead className="thead-light">
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Category</th>
              <th>Edited</th>
            </tr>
          </thead>

          <tbody>
            {movieList.map((m) => (
              <tr>
                <td>{m.Title}</td>
                <td>{m.Year}</td>
                <td>{m.Director}</td>
                <td>{m.Rating}</td>
                <td>{m.Category}</td>
                <td>{m.Edited}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Movies;
