export const getMoviesByType = async (type: string) => {
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
    return response;
  } catch (error) {
    console.error(error);
    throw new Error("Movies could not be loaded !");
  }
};
