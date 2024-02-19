import Button from "../../molecules/button/Button";
import styles from "./loadingBar.module.scss";

interface LoadingBarProps {
  progress: number;
  error?: boolean;
  setIsFirstTry: any;
  setProgress: any;
  setError: any;
}

const LoadingBar = ({
  progress,
  error,
  setIsFirstTry,
  setProgress,
  setError,
}: LoadingBarProps) => {
  const progressStyle = {
    width: `${progress}%`,
  };

  const handleCancel = () => {
    setIsFirstTry(false);
    setProgress(0);
    setError(false);
  };

  return (
    <div className={styles.loadingBarContainer}>
      <span className={styles.loadingText}>
        {error
          ? "¡ERROR! No se pudo cargar la película"
          : `Cargando ${progress}%`}
      </span>

      <div className={styles.loadingBar}>
        <div
          className={`${styles.loadingBarProgress} ${
            error ? styles.error : ""
          }`}
          style={progressStyle}
        ></div>
      </div>
      <div className={styles.flexEnd}>
        {error ? (
          <Button
            label={"reintentar"}
            variant="tertiary"
            bold
            onClick={handleCancel}
          />
        ) : (
          <Button label={"CANCELAR"} variant="tertiary" bold />
        )}
      </div>
    </div>
  );
};

export default LoadingBar;
