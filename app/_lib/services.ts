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
export const getMoviesTotalPages = async (type: string) => {
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

export interface TVShowType {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  first_air_date: string;
  name: string;
  vote_average: number;
  vote_count: number;
}

export const getTVShowsByType = async (type: string, page: string) => {
  const url = `https://api.themoviedb.org/3/tv/${type}?language=en-US&page=${page}`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.API_TOKEN as string}`,
    },
  };
  try {
    const request = await fetch(url, options);
    const response = await request.json();
    return response.results as TVShowType[];
  } catch (error) {
    console.error(error);
    throw new Error("TV Shows could not be loaded !");
  }
};

export const getTVShowsTotalPages = async (type: string) => {
  const url = `https://api.themoviedb.org/3/tv/${type}?language=en-US&page=1`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.API_TOKEN as string}`,
    },
  };
  try {
    const request = await fetch(url, options);
    const response = await request.json();
    return response.total_pages as number;
  } catch (error) {
    console.error(error);
    throw new Error("TV Shows could not be loaded !");
  }
};

export interface GenreType {
  id: number;
  name: string;
}

export const getMoviesGenres = async () => {
  const url = "https://api.themoviedb.org/3/genre/movie/list?language=en";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.API_TOKEN as string}`,
    },
  };
  try {
    const request = await fetch(url, options);
    const response = await request.json();
    return response.genres as GenreType[];
  } catch (error) {
    console.error(error);
    throw new Error("Genres could not be loaded !");
  }
};

export const getTVShowsGenres = async () => {
  const url = "https://api.themoviedb.org/3/genre/tv/list?language=en";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.API_TOKEN as string}`,
    },
  };
  try {
    const request = await fetch(url, options);
    const response = await request.json();
    return response.genres as GenreType[];
  } catch (error) {
    console.error(error);
    throw new Error("Genres could not be loaded !");
  }
};

export interface LanguageType {
  iso_639_1: string;
  english_name: string;
  name: string;
}

export const getLanguages = async () => {
  const url = "https://api.themoviedb.org/3/configuration/languages";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.API_TOKEN as string}`,
    },
  };
  try {
    const request = await fetch(url, options);
    const response = await request.json();
    return response as LanguageType[];
  } catch (error) {
    console.error(error);
    throw new Error("Genres could not be loaded !");
  }
};

export const getTrendMovies = async (time: string) => {
  const url = `https://api.themoviedb.org/3/trending/movie/${time}?language=en-US`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.API_TOKEN as string}`,
    },
  };
  try {
    const request = await fetch(url, options);
    const response = await request.json();
    return response.results as MovieType[];
  } catch (error) {
    console.error(error);
    throw new Error("Genres could not be loaded !");
  }
};

export const getPopularShows = async () => {
  const url = "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.API_TOKEN as string}`,
    },
  };
  try {
    const request = await fetch(url, options);
    const response = await request.json();
    return response.results as TVShowType[];
  } catch (error) {
    console.error(error);
    throw new Error("Genres could not be loaded !");
  }
};

export interface MovieDetailsType {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null;
  budget: number;
  genres: [
    {
      id: number;
      name: string;
    },
    {
      id: number;
      name: string;
    }
  ];
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string[];
  popularity: number;
  poster_path: string;
  production_companies: [
    {
      id: number;
      logo_path: string;
      name: string;
      origin_country: string;
    },
    {
      id: number;
      logo_path: string[];
      name: string[];
      origin_country: string[];
    }
  ];
  production_countries: [
    {
      iso_3166_1: string[];
      name: string[];
    }
  ];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: [
    {
      english_name: string;
      iso_639_1: string;
      name: string;
    }
  ];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export const getDetailsMovie = async (id: string) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.API_TOKEN as string}`,
    },
  };

  try {
    const request = await fetch(url, options);
    const response = await request.json();
    return response as MovieDetailsType;
  } catch (error) {
    console.error(error);
    throw new Error("Genres could not be loaded !");
  }
};

export interface TVShowDetailsType {
  backdrop_path: string;
  genres: GenreType[];
  first_air_date: string;
  id: number;
  name: string;
  overview: string;
  vote_average: number;
  status: string;
  original_language: string;
}

export const getDetailsTVShow = async (id: string) => {
  const url = `https://api.themoviedb.org/3/tv/${id}?language=en-US`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.API_TOKEN as string}`,
    },
  };
  try {
    const request = await fetch(url, options);
    const response = await request.json();
    return response as TVShowDetailsType;
  } catch (error) {
    console.error(error);
    throw new Error("TV show details could not be loaded !");
  }
};

export interface SearchItemType {
  id: 125089;
  name: string;
  original_name: string;
  overview: string;
  poster_path: null;
  media_type: "tv" | "movie";
  first_air_date: string;
  vote_average: number;
}
interface SearchDataType {
  results: SearchItemType[];
  page: number;
  total_pages: number;
}

export const searchMulti = async (query: string, page: string) => {
  const url = `https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=false&language=en-US&page=${page}`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.API_TOKEN as string}`,
    },
  };
  try {
    const request = await fetch(url, options);
    const { page, results, total_pages } =
      (await request.json()) as SearchDataType;
    const response: SearchDataType = {
      page,
      total_pages,
      results: results.filter(
        (data) => data.media_type === "movie" || data.media_type === "tv"
      ),
    };
    return response;
  } catch (error) {
    console.error(error);
    throw new Error("TV show details could not be loaded !");
  }
};
