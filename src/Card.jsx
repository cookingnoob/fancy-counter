import Title from "./Title";
import Count from "./Count";
import ResetButton from "./ResetButton";
import ButtonContainer from "./ButtonContainer";
import { useState } from "react";

const Card = () => {
  const [count, setCount] = useState(0);
  const locked = count === 5 ? true : false;
  return (
    <div className="card">
      <Title locked={locked} />
      <Count count={count} locked={locked} />
      <ResetButton setCount={setCount} />
      <ButtonContainer setCount={setCount} locked={locked} />
    </div>
  );
};

export default Card;
