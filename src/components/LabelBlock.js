import "./LabelBlock.css";

export const LabelBlock = ({ labelName, children }) => {
  return (
    <div className="block">
      <label>{labelName}</label>
      {children}
    </div>
  );
};
