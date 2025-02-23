interface IconProp {
    color: string
}

const Plus = ({color}: IconProp) => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7 0V14" stroke={color} />
      <path d="M14 7L-5.96046e-08 7" stroke={color} />
    </svg>
  );
};

export default Plus;
