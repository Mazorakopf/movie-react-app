const baseUrl = 'http://localhost:4000';

const JsonContentType = {
  'Content-Type': 'application/json;charset=utf-8',
};

const toModel = (dto) => ({
  ...dto,
  genre: dto.genres[0],
  release_year: dto.release_date.split('-')[0],
});

const toDTO = (model) => ({
  id: model.id,
  title: model.title,
  tagline: model.tagline,
  vote_average: model.vote_average,
  vote_count: model.vote_count,
  release_date: model.release_date,
  poster_path: model.poster_path,
  overview: model.poster_path,
  budget: model.budget,
  revenue: model.revenue,
  genres: Array.from([model.genre]),
  runtime: Number(model.runtime),
});

export const getAllByQuery = async (query) => {
  let url = `${baseUrl}/movies`;
  if (query?.sortBy) {
    url += `?sortBy=${query.sortBy}&sortOrder=desc`;
  }
  if (query?.filter) {
    url += `?searchBy=genres&filter=${query.filter}`;
  }
  const response = await fetch(url, { method: 'GET' });
  const result = await response.json();
  return result.data.map(toModel);
};

export const getById = async (id) => {
  const response = await fetch(`${baseUrl}/movies/${id}`, {
    method: 'GET',
  });
  return toModel(await response.json());
};

export const create = async (movie) => {
  const response = await fetch(`${baseUrl}/movies`, {
    method: 'POST',
    headers: JsonContentType,
    body: JSON.stringify(toDTO(movie)),
  });
  return toModel(await response.json());
};

export const update = async (movie) => {
  const response = await fetch(`${baseUrl}/movies`, {
    method: 'PUT',
    headers: JsonContentType,
    body: JSON.stringify(toDTO(movie)),
  });
  return toModel(await response.json());
};

export const remove = async (id) => {
  const response = await fetch(`${baseUrl}/movies/${id}`, { method: 'DELETE' });
  return response.ok;
};
