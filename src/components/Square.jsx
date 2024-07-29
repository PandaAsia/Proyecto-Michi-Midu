/* eslint-disable react/prop-types */
const Square = ({ children, updateBoard, index, isSelected }) => {
  const className = `square ${isSelected ? "is-selected" : ""}`;

  const handleclick = () => {
    updateBoard(index);
  };
  return (
    <>
      <div className={className} onClick={handleclick}>
        {children}
      </div>
    </>
  );
};
export default Square;
