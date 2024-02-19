export const generateImageUrls = (results: [], baseUrl: string): string[] => {
  return results.map((movie: any) => `${baseUrl}${movie.backdrop_path}`);
};

export const generateMoviesTitles = (results: []): string[] => {
  return results.map((movie: any) => movie.title);
};

export const rounded = (value: number) => {
  return value.toFixed(1);
};
