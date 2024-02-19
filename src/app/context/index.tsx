"use client";
import { createContext, useState, useContext } from "react";
import { Movie } from "../interfaces/movie";
import { MyMovie } from "../interfaces/myMovie";

export interface State {
  moviesData: Movie[];
  movies: string[];
  backgroundsData: Movie[];
  backgrounds: string[];
  movieTitles: string[];
  toggleMenu: boolean;
  displayAddMovie: boolean;
  myMovies: MyMovie[];
  myMovie: MyMovie | null;
}

const AppContext = createContext<any>({
  moviesData: [],
  movies: [],
  backgroundsData: [],
  backgrounds: [],
  movieTitles: [],
  toggleMenu: false,
  displayAddMovie: false,
  myMovie: null,
  myMovies: []
});

export const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  const [appState, setAppState] = useState<State>({
    moviesData: [],
    movies: [],
    backgroundsData: [],
    backgrounds: [],
    movieTitles: [],
    toggleMenu: false,
    displayAddMovie: false,
    myMovie: null,
    myMovies: []
  });

  const contextValue = { appState, setAppState };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext debe ser utilizado dentro de un AppWrapper");
  }
  return context;
};
