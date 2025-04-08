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
    const response=await request.json()
    return response.results as TVShowType[];
  } catch (error) {
    console.error(error);
    throw new Error("Genres could not be loaded !");
  }

  
    
};

export const getDetailsMovie=async(id:string)=>{
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
    return response
  } catch (error) {
    console.error(error);
    throw new Error("Genres could not be loaded !");
  }
}
