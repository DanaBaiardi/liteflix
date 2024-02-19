import { State, useAppContext } from "@/app/context";
import styles from "./dragAndDropLogic.module.scss";
import { MyMovie } from "@/app/interfaces/myMovie";
import { useEffect, useState } from "react";
import DragAndDrop from "../../atoms/dragAndDrop/DragAndDrop";
import Input from "../../input/Input";
import Button from "../../molecules/button/Button";
import LoadingBar from "../../atoms/loadingBar/LoadingBar";
import useProgress from "@/app/hooks/useProgress";
import Logo from "../../atoms/logo/Logo";

const DragAndDropLogic = () => {
  const { appState, setAppState } = useAppContext();
  const [newMovies, setNewMovies] = useState<MyMovie[]>([]);
  const [disableUpload, setDisableUpload] = useState(true);
  const [isFirstTry, setIsFirstTry] = useState(true);
  const [error, setError] = useState(false);
  const [progress, setProgress] = useProgress();
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (progress === 100) {
      setDisableUpload(false);
      if (isFirstTry) {
        setError(true);
      }

      setIsFirstTry(false);
    }
  }, [progress]);

  useEffect(() => {
    const disable = newMovies.some((movie) =>
      Object.values(movie).some((value) => value === "")
    );
    setDisableUpload(disable);
  }, [newMovies]);

  const handleMovieAdded = (movie: MyMovie) => {
    setNewMovies((prevMovies) => [...prevMovies, movie]);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    setNewMovies((prevMovies) =>
      prevMovies.map((movie) => ({
        ...movie,
        movieTitle: title,
      }))
    );
  };

  const handleUpload = () => {
    setAppState((prevState: State) => ({
      ...prevState,
      myMovies: [...prevState.myMovies, ...newMovies],
    }));

    const updatedMovies = [...appState.myMovies, ...newMovies];
    localStorage.setItem("myMovies", JSON.stringify(updatedMovies));

    setNewMovies([]);
    setSuccess(true);
  };

  const handleCancel = () => {
    setSuccess(false);

    setAppState((prevState: State) => ({
      ...prevState,
      displayAddMovie: false,
    }));
  };

  return (
    <div className={styles.addMovie}>
      {success ? (
        <div className={styles.successText}>
          <Logo />
          <div className={styles.congratsText}>
            <span className={styles.strong}>¡FELICITACIONES!</span>
            <p>LITEFLIZ MOVIE FUE AGREGADA CORRECTAMENTE</p>
          </div>

          <Button
            label={"ir a home"}
            onClick={handleCancel}
            disabled={disableUpload}
            variant="white"
            bold
          />
        </div>
      ) : (
        <>
          <span className={styles.text20}>AGREGAR PELÍCULA</span>
          {!newMovies.length ? (
            <DragAndDrop onMovieAdded={handleMovieAdded} />
          ) : (
            <LoadingBar
              progress={progress as number}
              error={error}
              setIsFirstTry={setIsFirstTry}
              setProgress={setProgress}
              setError={setError}
            />
          )}

          <Input
            placeholder={"título"}
            value={newMovies.length > 0 ? newMovies[0].movieTitle : ""}
            onChange={handleTitleChange}
          />
          <Button
            label={"subir película"}
            onClick={handleUpload}
            disabled={disableUpload}
            variant="white"
            bold
          />
        </>
      )}
    </div>
  );
};

export default DragAndDropLogic;
