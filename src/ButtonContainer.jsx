import CountButton from "./CountButton";

const ButtonContainer = ({ setCount, locked }) => {
  return (
    <div className="button-container">
      <CountButton setCount={setCount} type="minus" locked={locked} />
      <CountButton setCount={setCount} type="plus" locked={locked} />
    </div>
  );
};

export default ButtonContainer;
