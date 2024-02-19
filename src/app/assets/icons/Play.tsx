interface IconProp {
  color: string;
}

const Play = ({ color }: IconProp) => {
  return (
    <svg
      width="13"
      height="16"
      viewBox="0 0 13 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.6484 8.27005L1 1V15L11.6484 8.27005Z"
        stroke={color}
      />
    </svg>
  );
};

export default Play;
