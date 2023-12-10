import React, { CSSProperties, FC, ReactNode, useState } from "react";
type ButtonProps = {
  top?: number;
  left?: number;
  width?: number;
  height?: number;
  onClick: () => void;
  children?: ReactNode;
  color?: string;
};

const TransparentButton: FC<ButtonProps> = ({
  top,
  left,
  children = "",
  onClick,
  width = "100",
  height = "100",
  color = "",
}) => {
  const [isHovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const buttonStyles: CSSProperties = {
    backgroundColor: color || "transparent",
    zIndex: 100,
    position: "absolute",
    top: `${top}%`,
    left: `${left}%`,
    width: `${width}%`,
    height: `${height}%`,
    border: "0",
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
