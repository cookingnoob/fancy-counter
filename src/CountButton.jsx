import React from "react";
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

const CountButton = ({ setCount, type, locked }) => {
  const handleClick = (event) => {
    setCount((prev) => {
      if (type === "plus") {
        const newCount = prev + 1;
        if (newCount > 5) {
          return 5;
        }
        return prev + 1;
      } else {
        const newCount = prev - 1;
        if (newCount < 0) {
          return 0;
        }
        return newCount;
      }
    });
    event.currentTarget.blur();
  };

  return (
    <button disabled={locked} onClick={handleClick} className="count-btn">
      {type === "minus" ? (
        <MinusIcon className="count-btn-icon" />
      ) : (
        <PlusIcon className="count-btn-icon" />
      )}
    </button>
  );
};

export default CountButton;
