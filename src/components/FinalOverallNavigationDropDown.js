import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./FinalOverallNavigationDropDown.css";

const FinalOverallNavigationDropDown = ({ onClose }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onFrameButtonClick = useCallback(() => {
    navigate("/aboutpage");
  }, [navigate]);

  const onFrameButton1Click = useCallback(() => {
    navigate("/blogspage");
  }, [navigate]);

  const onFrameButton2Click = useCallback(() => {
    navigate("/projectpage");
  }, [navigate]);

  const onFrameButton4Click = useCallback(() => {
    navigate("/achievementspage");
  }, [navigate]);

  return (
    <div className="finaloverallnavigationdropdown" data-animate-on-scroll>
      <div className="menu-right1">
        <div className="links-group">
          <div className="links2">
            <button className="frame-parent7" onClick={onFrameButtonClick}>
              <img className="frame-child6" alt="" src="../frame-19949.svg" />
              <button className="about1">About</button>
            </button>
            <button className="frame-parent7" onClick={onFrameButton1Click}>
              <img className="frame-child6" alt="" src="../frame-199410.svg" />
              <button className="about1">Blogs</button>
            </button>
            <button className="frame-parent7" onClick={onFrameButton2Click}>
              <img className="frame-child6" alt="" src="../frame-199411.svg" />
              <button className="about1">Projects</button>
            </button>
            <button className="frame-parent7">
              <img className="frame-child6" alt="" src="../frame-199412.svg" />
              <button className="about1">Courses</button>
            </button>
            <button className="frame-parent11" onClick={onFrameButton4Click}>
              <img className="frame-child6" alt="" src="../frame-199413.svg" />
              <button className="about1">Achievements</button>
            </button>
            <button className="frame-parent12">
              <img className="frame-child6" alt="" src="../frame-199414.svg" />
              <button className="about1">Contact</button>
            </button>
          </div>
          <button className="component-21" onClick={onClose}>
            <div className="rectangle-div" />
            <img className="component-2-child1" alt="" src="../line-11.svg" />
            <div className="line-div" />
            <img className="component-2-child2" alt="" src="../line-31.svg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FinalOverallNavigationDropDown;
