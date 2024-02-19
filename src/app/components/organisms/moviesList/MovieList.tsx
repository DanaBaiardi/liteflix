import { IMAGE_BASE_URL } from "@/app/utils/constants";
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "./movieList.module.scss";
import MoviePreview from "../../molecules/moviePreview/MoviePreview";
import Icon from "../../../components/atoms/icon/Icon";
import { Movie } from "@/app/interfaces/movie";
import { MyMovie } from "@/app/interfaces/myMovie";
import Button from "../../molecules/button/Button";
import { useAppContext } from "@/app/context";
import Dropdown from "../../molecules/dropdown/Dropdown";

interface MovieListProps {
  movies: (Movie | MyMovie)[];
  setToggleMoviesList: Dispatch<SetStateAction<"popular" | "myMovies">>;
  toggleMovieList: "popular" | "myMovies";
}

const MovieList = ({
  movies,
  setToggleMoviesList,
  toggleMovieList,
}: MovieListProps) => {
  const [localMovies, setLocalMovies] = useState<(Movie | MyMovie)[]>([]);
  const moviesListRef = useRef<HTMLUListElement>(null);
  const { appState } = useAppContext();
  const { myMovies } = appState;

  useEffect(() => {
    if (movies && movies.length > 0) {
      const firstEightMovies = movies.slice(0, 4);
      setLocalMovies(firstEightMovies);
    }
  }, [movies]);

  useEffect(() => {
    scrollToNextMovie();
  }, [localMovies]);

  const handleMoreMoviesClick = () => {
    if (movies && movies.length > 0) {
      if (localMovies.length < movies.length) {
        const nextMovie = movies[localMovies.length];
        setLocalMovies((prevMovies) => [...prevMovies, nextMovie]);
      }
    }
  };

  const scrollToNextMovie = () => {
    if (moviesListRef.current) {
      moviesListRef.current.scrollTop += 312;
    }
  };

  const scrollToPreviousMovie = () => {
    if (moviesListRef.current) {
      moviesListRef.current.scrollTop -= 312;
      if (localMovies.length > 4) {
        setLocalMovies((prevMovies) =>
          prevMovies.slice(0, prevMovies.length - 1)
        );
      }
    }
  };

  return (
    <div className={styles.movieListContainer}>
      <div className={styles.listTitle}>
        <p className={styles.text18}>
          ver:{" "}
          <b>{toggleMovieList === "popular" ? "populares" : "mis peliculas"}</b>
        </p>
        <Dropdown element={<Icon iconName="arrowDown" />}>
          <div className={styles.options}>
            <Button
              variant="tertiary"
              label="populares"
              onClick={() => setToggleMoviesList("popular")}
            />
            {myMovies.length !== 0 && (
              <Button
                variant="tertiary"
                label="mis películas"
                onClick={() => setToggleMoviesList("myMovies")}
              />
            )}
          </div>
        </Dropdown>
      </div>
      <Icon iconName="arrowUp" onClick={scrollToPreviousMovie} />
      <ul className={styles.moviesList} ref={moviesListRef}>
        {localMovies.map((movie) => (
          <li key={movie.id}>
            <MoviePreview
              movieImageUrl={
                "backdrop_path" in movie
                  ? `${IMAGE_BASE_URL}${movie.backdrop_path}`
                  : movie.movieImage
              }
              movieImageAlt={"title" in movie ? movie.title : movie.movieTitle}
              isLoading={true}
              movie={movie}
              showDetails={"backdrop_path" in movie}
            />
          </li>
        ))}
      </ul>
      <Icon iconName="arrowDown" onClick={handleMoreMoviesClick} />
    </div>
  );
};

export default MovieList;
