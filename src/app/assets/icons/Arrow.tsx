interface IconProp {
  color: string;
  className?: string;
}

const Arrow = ({ color, className }: IconProp) => {
  return (
    <svg
      width="22"
      height="11"
      viewBox="0 0 22 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M20.6924 10L10.8462 2L1.00007 10"
        stroke={color}
        strokeWidth="2"
      />
    </svg>
  );
};

export default Arrow;
