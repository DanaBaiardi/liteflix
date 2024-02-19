import React from "react";
interface TextProps {
  children: string;
}

const Text = ({ children }: TextProps) => {
  const parts = children.split(/(\*\*.*?\*\*)/);

  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          const boldText = part.slice(2, -2);
          return <strong key={index}>{boldText}</strong>;
        } else {
          return <span key={index}>{part}</span>;
        }
      })}
    </>
  );
};

export default Text;
