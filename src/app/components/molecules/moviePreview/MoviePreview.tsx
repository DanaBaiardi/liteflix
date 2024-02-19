import styles from "./moviePreview.module.scss";
import Image from "next/image";
import classNames from "classnames";
import PlayButton from "../../atoms/playButton/PlayButton";
import Icon from "../../atoms/icon/Icon";
import { useEffect, useState } from "react";
import { rounded } from "@/app/utils/helpers";
import { Movie } from "@/app/interfaces/movie";

interface MoviePreviewProps {
  movieImageUrl: string;
  movieImageAlt: string;
  isLoading: boolean;
  movie?: any;
  showDetails?: boolean
}

const MoviePreview = ({
  movieImageUrl,
  movieImageAlt,
  isLoading,
  movie,
  showDetails = true
}: MoviePreviewProps) => {
  const [favorite, setFavorite] = useState(false);

  return (
    <div
      className={classNames(styles.moviePreview, isLoading && styles.skeleton)}
    >
      <div className={styles.innerWrapper}>
        <Image
          className={styles.movieImage}
          src={movieImageUrl}
          alt={movieImageAlt}
          width={220}
          height={146}
        />

        <div className={styles.movieTitle}>
          <PlayButton size={"big"} />
          <span className={styles.titleText16}>{movie?.movieTitle || movie?.title}</span>
        </div>

        <div className={styles.movieDetails}>
          <div className={styles.movieHoverBg}>
            <div className={styles.flexEnd}>
              <span className={styles.iconSafeArea}>
                {favorite ? (
                  <Icon iconName="plus" onClick={() => setFavorite(false)} />
                ) : (
                  <Icon iconName="check" />
                )}
              </span>
            </div>

            <div className={styles.actionsWrapper}>
              <div className={styles.inline12}>
                <PlayButton borderColor="white" color="none" size="small" />
                <span className={styles.actionsTitle}>{movie?.movieTitle || movie?.title}</span>
              </div>
              <Icon
                iconName="heart"
                isActive={favorite}
                onClick={() => setFavorite(true)}
              />
            </div>
          </div>
          {
            showDetails &&
          <div className={styles.moviedetailsBg}>
            <p className={styles.movieDescription}>{movie.overview}</p>
            <div className={styles.flexBeetween}>
              <div className={styles.inline6}>
                <Icon iconName="star" />
                {rounded(movie.vote_average)}
              </div>
              <span>2018</span>
            </div>
          </div>
          }
        </div>
      </div>
    </div>
  );
};

export default MoviePreview;
