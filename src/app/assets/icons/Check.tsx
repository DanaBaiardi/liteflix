interface IconProp {
  color: string;
}

const Check = ({ color }: IconProp) => {
  return (
    <svg
      width="18"
      height="16"
      viewBox="0 0 18 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 8.67742L6.16129 13.8387L17 3" stroke={color} />
    </svg>
  );
};

export default Check;
