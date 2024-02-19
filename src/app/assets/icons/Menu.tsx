interface IconProp {
  color: string;
}

const Menu = ({ color }: IconProp) => {
  return (
    <svg
      width="27"
      height="14"
      viewBox="0 0 27 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 1H27" stroke={color} />
      <path d="M0 7H27" stroke={color} />
      <path d="M10 13H27" stroke={color} />
    </svg>
  );
};

export default Menu;
