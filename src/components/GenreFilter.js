import React from 'react';

const genres = [
  { id: 28, name: 'Action' },
  { id: 12, name: 'Adventure' },
  { id: 27, name: 'Horror' },
  { id: 53, name: 'Thriller' },
  { id: 35, name: 'Comedy' },
  { id: 37, name: 'Western' },
  { id: 10749, name: 'Romance' },
  { id: 80, name: 'Crime' },
  { id: 878, name: 'Sci-Fi' },
  { id: 18, name: 'Drama' },
  { id: 99, name: 'Documentary' },
  { id: 9648, name: 'Mystery' },
  { id: 16, name: 'Animation' },
  { id: 10402, name: 'Musical' },
  { id: 10752, name: 'War' },
  { id: 10756, name: 'Sports' },
];

const GenreFilter = ({ selectedGenres, onGenreChange }) => {
  return (
    <div className='p-4'>
      <h4 className='text-lg font-semibold mb-2'>Filter by Genre</h4>
      {genres.map((genre) => (
        <div key={genre.id} className='mb-2'>
          <input
            type='checkbox'
            id={`genre-${genre.id}`}
            value={genre.id}
            checked={selectedGenres.includes(genre.id)}
            onChange={() => onGenreChange(genre.id)}
          />
          <label htmlFor={`genre-${genre.id}`} className='ml-2'>{genre.name}</label>
        </div>
      ))}
    </div>
  );
};

export default GenreFilter;
