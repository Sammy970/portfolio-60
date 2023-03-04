import { useCallback } from "react";
import "./WasteSeg.css";

const WasteSeg = ({ onClose }) => {
  const onReadMoreClick = useCallback(() => {
    window.open("https://www.youtube.com/watch?v=dq2P6GUqSFA&t");
  }, []);

  const onReadMore1Click = useCallback(() => {
    window.open("https://sites.google.com/view/waste-seg");
  }, []);

  return (
    <div className="wasteseg">
      <img className="wasteseg-icon" alt="" src="../8-wasteseg@2x.png" />
      <button className="read-more12" onClick={onReadMoreClick}>
        <b className="read-more13">Check out YouTube Video</b>
      </button>
      <button className="read-more12" onClick={onReadMore1Click}>
        <b className="read-more13">Check out full details on my website</b>
      </button>
    </div>
  );
};

export default WasteSeg;
