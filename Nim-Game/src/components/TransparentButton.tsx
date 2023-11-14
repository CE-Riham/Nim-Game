import React, { CSSProperties, ReactNode, useState } from "react";
interface ButtonProps {
  top: string;
  left: string;
  width: string;
  height: string;
  onClick: () => void;
  children?: ReactNode;
}
const TransparentButton = ({
  top,
  left,
  children = "",
  onClick,
  width,
  height,
}: ButtonProps) => {
  const [isHovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const buttonStyles: CSSProperties = {
    backgroundColor: "transparent",
    zIndex: 100,
    position: "absolute",
    top: top,
    left: left,
    width: width,
    height: height,
    border: 0,
    cursor: isHovered ? "pointer" : "default",
  };

  return (
    <div>
      <button
        style={buttonStyles}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};

export default TransparentButton;
