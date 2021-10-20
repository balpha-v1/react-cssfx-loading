import React from "react";
import Styles from "./FillingBottle.module.css";

interface FillingBottleProps {
  className?: string;
  color?: string;
  width?: number | string;
  height?: number | string;
  duration?: string;
}

const FillingBottle: React.FC<FillingBottleProps & React.HTMLProps<HTMLDivElement>> = ({ className = "", color = "#0d6efd", width = "2em", height = "2em", style, duration = "2s", ...others }) => {
  return <div {...others} style={{ ...style, ["--width" as any]: width, ["--height" as any]: height, ["--color" as any]: color, ["--duration" as any]: duration }} className={`${Styles["filling-bottle"]} ${className}`}></div>;
};

export default FillingBottle;
