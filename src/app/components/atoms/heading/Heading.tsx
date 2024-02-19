import classNames from "classnames";
import "./heading.scss";

interface HeadingProps {
  title: string;
  size: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
};

const Heading = ({ title, size, className }: HeadingProps) => {

  const headings = {
    h1: <h1 className={classNames("h1", className)}>{title}</h1>,
    h2: <h2 className={classNames("h2", className)}>{title}</h2>,
    h3: <h3 className={classNames("h3", className)}>{title}</h3>,
    h4: <h4 className={classNames("h4", className)}>{title}</h4>,
    h5: <h5 className={classNames("h5", className)}>{title}</h5>,
    h6: <h6 className={classNames("h6", className)}>{title}</h6>,
  };

  return headings[size];
};

export default Heading;