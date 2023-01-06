const Square = ({ value, chooseSquare }) => {
  return (
    <div
      id="square"
      className="flex justify-center items-center border-solid border-2 border-black basis-2/6 h-full  text-black text-5xl"
      onClick={chooseSquare}
    >
      {value}
    </div>
  );
};

export default Square;
