"use client";
import { useEffect, useState } from "react";
import Header from "./components/molecules/header/Header";
import MenuList from "./components/molecules/menuList/MenuList";
import Background from "./components/organisms/background/Background";
import Dialog from "./components/organisms/dialog/Dialog";
import DragAndDropLogic from "./components/organisms/dragAndDropLogic/DragAndDropLogic";
import Hero from "./components/organisms/hero/Hero";
import MovieList from "./components/organisms/moviesList/MovieList";
import Wrapper from "./components/organisms/wrapper/Wrapper";
import { useAppContext } from "./context";
import styles from "./page.module.scss";

export default function Home() {
  const { appState } = useAppContext();
  const {
    backgrounds,
    movieTitles,
    toggleMenu,
    displayAddMovie,
    moviesData,
    myMovies,
  } = appState;

  const [toggleMoviesList, setToggleMoviesList] = useState<
    "popular" | "myMovies"
  >("popular");

  return (
    <>
      {toggleMenu && (
        <Dialog id="menu-dialog" ariaLabel="menu-dialog" open={toggleMenu}>
          <MenuList />
        </Dialog>
      )}

      {displayAddMovie && (
        <Dialog id="menu-dialog" ariaLabel="menu-dialog" open={displayAddMovie}>
          <Wrapper>
            <DragAndDropLogic />
          </Wrapper>
        </Dialog>
      )}

      <main className={styles.main}>
        <Background backgrounds={backgrounds}>
          <Header />
          <div className={styles.body}>
            <Hero titles={movieTitles} />
            {toggleMoviesList === "popular" ? (
              <MovieList
                movies={moviesData}
                setToggleMoviesList={setToggleMoviesList}
                toggleMovieList={toggleMoviesList}
              />
            ) : (
              <MovieList
                movies={myMovies}
                setToggleMoviesList={setToggleMoviesList}
                toggleMovieList={toggleMoviesList}
              />
            )}
          </div>
        </Background>
      </main>
    </>
  );
}
