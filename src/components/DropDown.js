import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./DropDown.css";

const DropDown = ({ onClose }) => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/blogspage");
  }, [navigate]);

  const onFrameButton1Click = useCallback(() => {
    navigate("/projectpage");
  }, [navigate]);

  const onFrameButton2Click = useCallback(() => {
    navigate("/achievementspage");
  }, [navigate]);

  return (
    <div className="dropdown">
      <div className="links">
        <div className="frame-parent">
          <button className="frame-group" onClick={onFrameButtonClick}>
            <img className="frame-child" alt="" src="../frame-1994.svg" />
            <button className="blogs">Blogs</button>
          </button>
          <button className="frame-container" onClick={onFrameButton1Click}>
            <img className="frame-child" alt="" src="../frame-19941.svg" />
            <button className="blogs">Projects</button>
          </button>
          <button className="frame-button" onClick={onFrameButton2Click}>
            <img className="frame-child" alt="" src="../frame-19942.svg" />
            <button className="blogs">Achievements</button>
          </button>
          <button className="frame-container">
            <img className="frame-child" alt="" src="../frame-19941.svg" />
            <button className="blogs">Courses</button>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DropDown;
