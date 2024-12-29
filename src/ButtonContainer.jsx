import CountButton from "./CountButton";

const ButtonContainer = ({ setCount }) => {
  return (
    <div className="button-container">
      <CountButton setCount={setCount} type="minus" />
      <CountButton setCount={setCount} type="plus" />
    </div>
  );
};

export default ButtonContainer;
