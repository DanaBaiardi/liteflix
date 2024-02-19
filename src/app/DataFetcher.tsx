"use client";
import React, { ReactNode, createContext, useEffect } from "react";
import { State, useAppContext } from "./context";
import {
  API_KEY,
  IMAGE_BASE_URL,
  NOW_PLAYING_URL,
  POPULAR_MOVIES_URL,
} from "./utils/constants";
import { fetchData } from "./utils/fetchData";
import { generateImageUrls, generateMoviesTitles } from "./utils/helpers";

const DataContext = createContext<any>(null);
const nowPlayingUrl = `${NOW_PLAYING_URL}?api_key=${API_KEY}`;
const popularMoviesUrl = `${POPULAR_MOVIES_URL}?api_key=${API_KEY}`;

const nowPlayingApiData: any = fetchData(nowPlayingUrl);
const popularMoviesData: any = fetchData(popularMoviesUrl);

interface DataFetcherProps {
  children: ReactNode;
}

export const DataFetcher: React.FC<DataFetcherProps> = ({
  children,
}: DataFetcherProps) => {
  const { appState, setAppState } = useAppContext();

  const backgroundsDataResults = nowPlayingApiData.read();
  const moviesData = popularMoviesData.read();

  useEffect(() => {
    if (backgroundsDataResults) {
      const backgroundImages = generateImageUrls(
        backgroundsDataResults.results,
        IMAGE_BASE_URL
      );

      const movieTitles = generateMoviesTitles(backgroundsDataResults.results);

      if (backgroundImages && backgroundImages.length > 0) {
        setAppState((prevState: State) => ({
          ...prevState,
          backgrounds: backgroundImages,
          backgroundsData: backgroundsDataResults.results,
          movieTitles: movieTitles,
        }));
      }
    }
  }, []);

  useEffect(() => {
    if (moviesData) {
      const movieImages = generateImageUrls(moviesData.results, IMAGE_BASE_URL);
      if (movieImages && movieImages.length > 0) {
        setAppState((prevState: State) => ({
          ...prevState,
          movies: movieImages,
          moviesData: moviesData.results,
        }));
      }
    }
  }, []);

  return (
    <DataContext.Provider value={appState}>{children}</DataContext.Provider>
  );
};
