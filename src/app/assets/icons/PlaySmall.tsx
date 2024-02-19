interface IconProp {
  color?: string;
  borderColor?: string;
}

const PlaySmall = ({ color, borderColor }: IconProp) => {
  return (
    <svg
      width="9"
      height="11"
      viewBox="0 0 9 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.18884 5.96164L0.799805 1.59961V9.99961L7.18884 5.96164Z"
        stroke={borderColor}
        fill={color}
      />
    </svg>
  );
};

export default PlaySmall;
