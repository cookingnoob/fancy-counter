import React from "react";
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

const CountButton = ({ setCount, type }) => {
  const handleClick = () => {
    setCount((prev) => {
      if (type === "plus") {
        return prev + 1;
      } else {
        return prev - 1;
      }
    });
  };
  return (
    <button onClick={handleClick} className="count-btn">
      {type === "minus" ? (
        <MinusIcon className="count-btn-icon" />
      ) : (
        <PlusIcon className="count-btn-icon" />
      )}
    </button>
  );
};

export default CountButton;
