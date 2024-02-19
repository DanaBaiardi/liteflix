// DragAndDrop.tsx
import React, { useState, DragEvent } from "react";
import Icon from "../icon/Icon";
import styles from "./dragAndDrop.module.scss";
import { MyMovie } from "@/app/interfaces/myMovie";
import { v4 as uuidv4 } from "uuid";

interface DragAndDropProps {
  onMovieAdded: (movie: MyMovie) => void;
}

const DragAndDrop: React.FC<DragAndDropProps> = ({ onMovieAdded }) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragEnter = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    handleFiles(files);
  };

  const handleFiles = (files: FileList) => {
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();

      reader.onload = (e) => {
        if (e.target) {
          const base64Image = e.target.result as string;
          const movie: MyMovie = {
            id: uuidv4(),
            movieImage: base64Image,
            movieTitle: "",
          };
          onMovieAdded(movie);
        }
      };

      reader.readAsDataURL(file);
    }
  };

  const handleInputClick = () => {
    const fileInput = document.getElementById("fileInput");
    if (fileInput) {
      fileInput.click();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      handleFiles(files);
    }
  };

  return (
    <div
      className={`${styles.dragAndDropWrapper} ${
        isDragging ? styles.dragging : ""
      }`}
      onDragEnter={handleDragEnter}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={handleInputClick}
    >
   
      <input
        type="file"
        id="fileInput"
        accept="image/*"
        onChange={handleInputChange}
        style={{ display: "none" }}
      />
      <Icon iconName="attach" />
      <span>Agregá un archivo o arrastralo y soltalo aquí</span>
    </div>
  );
};

export default DragAndDrop;
