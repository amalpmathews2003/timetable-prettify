import "./box.css";
export default function Box({ slot, subject, color, handleClick }) {
  if (slot == "L") {
    color = "#bdbdbd";
    subject = "";
    slot = "";
  }
  return (
    <div
      className="box"
      onClick={() => handleClick(slot)}
      style={{
        backgroundColor: color,
      }}
    >
      <div className="box__slot">{slot}</div>
      <div className="box__subject">{subject}</div>
    </div>
  );
}
