interface IconProp {
  color: string;
}

const Menu = ({ color }: IconProp) => {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_5587_2973)">
        <path
          d="M20.8008 8.66685C20.8008 6.69667 19.979 4.80719 18.5162 3.41406C17.0534 2.02093 15.0695 1.23828 13.0008 1.23828C10.9321 1.23828 8.94813 2.02093 7.48535 3.41406C6.02256 4.80719 5.20078 6.69667 5.20078 8.66685C5.20078 17.3335 1.30078 19.8097 1.30078 19.8097H24.7008C24.7008 19.8097 20.8008 17.3335 20.8008 8.66685Z"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.25 23.5234C15.0214 23.8987 14.6933 24.2101 14.2986 24.4267C13.9039 24.6432 13.4564 24.7571 13.001 24.7571C12.5455 24.7571 12.098 24.6432 11.7033 24.4267C11.3086 24.2101 10.9805 23.8987 10.752 23.5234"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_5587_2973">
          <rect width="26" height="26" fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Menu;
