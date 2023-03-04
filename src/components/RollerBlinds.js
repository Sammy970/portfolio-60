import { useCallback } from "react";
import "./RollerBlinds.css";

const RollerBlinds = ({ onClose }) => {
  const onReadMoreClick = useCallback(() => {
    window.open(
      "https://medium.com/the-modern-scientist/designing-and-implementing-a-voice-controlled-roller-blind-part-1-82e8014317f0"
    );
  }, []);

  const onReadMore1Click = useCallback(() => {
    window.open(
      "https://medium.com/the-modern-scientist/designing-and-implementing-a-voice-controlled-roller-blind-part-2-a726b7ed7887"
    );
  }, []);

  return (
    <div className="rollerblinds">
      <img
        className="rollerblinds-icon"
        alt=""
        src="../6-rollerblinds@2x.png"
      />
      <button className="read-more8" onClick={onReadMoreClick}>
        <b className="read-more9">Read More on Medium (Part 1)</b>
      </button>
      <button className="read-more8" onClick={onReadMore1Click}>
        <b className="read-more9">Read More on Medium (Part 2)</b>
      </button>
    </div>
  );
};

export default RollerBlinds;
