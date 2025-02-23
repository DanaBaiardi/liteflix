interface IconProp {
  color: string;
  isActive?: boolean;
}

const Heart = ({ color, isActive = false }: IconProp) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 16.875C10 16.875 2.1875 12.5 2.1875 7.18751C2.18766 6.24855 2.51301 5.33863 3.10824 4.61244C3.70347 3.88626 4.53183 3.38863 5.45249 3.20418C6.37315 3.01972 7.32928 3.15982 8.15832 3.60066C8.98736 4.04149 9.63814 4.75585 10 5.62227L9.99999 5.62228C10.3619 4.75585 11.0126 4.04149 11.8417 3.60066C12.6707 3.15983 13.6268 3.01973 14.5475 3.20418C15.4682 3.38863 16.2965 3.88625 16.8918 4.61244C17.487 5.33863 17.8123 6.24855 17.8125 7.18751C17.8125 12.5 10 16.875 10 16.875Z"
        stroke={color}
        fill={isActive ? "white" : "none"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Heart;
