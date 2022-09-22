import "./SquareButton.css";

const SquareButton = ({ active, text, ...btnProps }) => {
  return (
    <button
      className={active ? ".Default-squarebutton-active" : "Default-squarebutton"}
      {...btnProps}
    >
      {text}
    </button>
  );
};

export default SquareButton;
