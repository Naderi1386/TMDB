export interface MovieType {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export const getMoviesByType = async (type: string, page: string) => {
  const url = `https://api.themoviedb.org/3/movie/${type}?language=en-US&page=${page}`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.API_TOKEN as string} `,
    },
  };

  try {
    const request = await fetch(url, options);
    const response = await request.json();
    return response.results as MovieType[];
  } catch (error) {
    console.error(error);
    throw new Error("Movies could not be loaded !");
  }
};
export const getTotalPages = async (type: string) => {
  const url = `https://api.themoviedb.org/3/movie/${type}?language=en-US&page=1`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.API_TOKEN as string} `,
    },
  };

  try {
    const request = await fetch(url, options);
    const response = await request.json();
    return response.total_pages as number;
  } catch (error) {
    console.error(error);
    throw new Error("Movies could not be loaded !");
  }
};
