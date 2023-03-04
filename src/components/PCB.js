import { useCallback } from "react";
import "./PCB.css";

const PCB = ({ onClose }) => {
  const onReadMoreClick = useCallback(() => {
    window.open(
      "https://medium.com/the-modern-scientist/yolov8-training-on-custom-data-3460f922ce86"
    );
  }, []);

  return (
    <div className="pcb">
      <img className="pcb-icon" alt="" src="../1-pcb@2x.png" />
      <button className="read-more" onClick={onReadMoreClick}>
        <b className="read-more1">Read More on Medium</b>
      </button>
    </div>
  );
};

export default PCB;
