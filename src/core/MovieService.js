import FilmIcon from '../assets/images/ldoY4fTZkGISMidNw60GHoNdgP8.jpg';

const movies = [
  {
    id: 0,
    imageUrl: FilmIcon,
    imageDesc: 'Guardians of the Galaxy',
    title: 'Guardians of the Galaxy',
    releaseDate: '2007-05-13',
    genre: 'Action & Adventure',
    overview: 'Test overview',
    runtime: 126
  },
  {
    id: 1,
    imageUrl: FilmIcon,
    imageDesc: 'Guardians of the Galaxy',
    title: 'Guardians of the Galaxy',
    releaseDate: '2004-06-13',
    genre: 'Horror',
    overview: 'Test overview',
    runtime: 126
  },
  {
    id: 2,
    imageUrl: FilmIcon,
    imageDesc: 'Guardians of the Galaxy',
    title: 'Guardians of the Galaxy',
    releaseDate: '2004-05-13',
    genre: 'Action & Adventure',
    overview: 'Test overview',
    runtime: 126
  },
  {
    id: 3,
    imageUrl: FilmIcon,
    imageDesc: 'Guardians of the Galaxy',
    title: 'Guardians of the Galaxy',
    releaseDate: '2004-05-13',
    genre: 'Action & Adventure',
    overview: 'Test overview',
    runtime: 126
  },
  {
    id: 4,
    imageUrl: FilmIcon,
    imageDesc: 'Guardians of the Galaxy',
    title: 'Guardians of the Galaxy',
    releaseDate: '2004-05-13',
    genre: 'Action & Adventure',
    overview: 'Test overview',
    runtime: 126
  },
  {
    id: 5,
    imageUrl: FilmIcon,
    imageDesc: 'Guardians of the Galaxy',
    title: 'Guardians of the Galaxy',
    releaseDate: '2004-05-13',
    genre: 'Action & Adventure',
    overview: 'Test overview',
    runtime: 126
  },
  {
    id: 6,
    imageUrl: FilmIcon,
    imageDesc: 'Guardians of the Galaxy',
    title: 'Guardians of the Galaxy',
    releaseDate: '2004-05-13',
    genre: 'Action & Adventure',
    overview: 'Test overview',
    runtime: 126
  },
  {
    id: 7,
    imageUrl: FilmIcon,
    imageDesc: 'Guardians of the Galaxy',
    title: 'Guardians of the Galaxy',
    releaseDate: '2004-05-13',
    genre: 'Action & Adventure',
    overview: 'Test overview',
    runtime: 126
  },
  {
    id: 8,
    imageUrl: FilmIcon,
    imageDesc: 'Guardians of the Galaxy',
    title: 'Guardians of the Galaxy',
    releaseDate: '2004-05-13',
    genre: 'Action & Adventure',
    overview: 'Test overview',
    runtime: 126
  },
];

const generateNextId = () => {
  let lastId = movies[movies.length - 1].id;
  return ++lastId;
};

export const getMoviePreviews = () => movies;

export const addMovie = (movie) => {
  movie.id = generateNextId();
  movies.push(movie);
};

export const deleteMovie = (movieToDelete) => {
  const movieIndex = movies.findIndex((movie) => movie.id === movieToDelete.id);
  movies.splice(movieIndex, 1);
};
