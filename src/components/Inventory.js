import { useCallback } from "react";
import "./Inventory.css";

const Inventory = ({ onClose }) => {
  const onReadMoreClick = useCallback(() => {
    window.open(
      "https://samyak970.medium.com/training-a-yolov7-model-using-custom-dataset-8300107cb81b"
    );
  }, []);

  return (
    <div className="inventory">
      <img className="inventory-icon" alt="" src="../3-inventory@2x.png" />
      <button className="read-more4" onClick={onReadMoreClick}>
        <b className="read-more5">Read More on Medium</b>
      </button>
    </div>
  );
};

export default Inventory;
