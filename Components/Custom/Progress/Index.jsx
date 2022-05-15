import React from "react";
import styles from "../../../styles/Progress.module.css";

const Index = ({
  size,
  value = 50,
  progressWidth = 2,
  progressColor = "yellow",
  borderColor = "blue",
  bg = "gray",
  children,
}) => {
  const customStyle = {
    background: `conic-gradient(
      ${progressColor} ${value * 3.6}deg, transparent 0deg, ${borderColor} ${
      value * 3.6
    }deg
    )`,
    width: `${size}rem`,
    height: `${size}rem`,
  };

  return (
    <div className="progress__wrapper">
      <div className={styles.progress__main} style={customStyle}>
        {children}
      </div>
    </div>
  );
};

export default Index;
