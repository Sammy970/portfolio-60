import { useCallback } from "react";
import "./TextUtils.css";

const TextUtils = ({ onClose }) => {
  const onReadMoreClick = useCallback(() => {
    window.open("https://sammy-textutils.vercel.app/");
  }, []);

  return (
    <div className="textutils">
      <img className="textutils-icon" alt="" src="../2-textutils@2x.png" />
      <button className="read-more2" onClick={onReadMoreClick}>
        <b className="read-more3">Check out the Web App</b>
      </button>
    </div>
  );
};

export default TextUtils;
