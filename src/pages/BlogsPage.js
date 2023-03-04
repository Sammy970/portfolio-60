import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import DropDown from "../components/DropDown";
import PortalPopup from "../components/PortalPopup";
import FinalOverallNavigationDropDown from "../components/FinalOverallNavigationDropDown";
import PortalDrawer from "../components/PortalDrawer";
import "./BlogsPage.css";

const BlogsPage = () => {
  const navigate = useNavigate();
  const [isDropDownPopupOpen, setDropDownPopupOpen] = useState(false);
  const [
    isFinalOverallNavigationDropDownOpen,
    setFinalOverallNavigationDropDownOpen,
  ] = useState(false);

  const onFashionLogoClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onFrameButtonClick = useCallback(() => {
    navigate("/aboutpage");
  }, [navigate]);

  const openDropDownPopup = useCallback(() => {
    setDropDownPopupOpen(true);
  }, []);

  const closeDropDownPopup = useCallback(() => {
    setDropDownPopupOpen(false);
  }, []);

  const openFinalOverallNavigationDropDown = useCallback(() => {
    setFinalOverallNavigationDropDownOpen(true);
  }, []);

  const closeFinalOverallNavigationDropDown = useCallback(() => {
    setFinalOverallNavigationDropDownOpen(false);
  }, []);

  const onReadMoreClick = useCallback(() => {
    window.open("https://www.google.com");
  }, []);

  const onReadMore1Click = useCallback(() => {
    window.open("https://www.google.com");
  }, []);

  return (
    <>
      <div className="blogspage">
        <div className="final-navigation-bar2">
          <div className="navigation-inner-bar2">
            <button className="fashion-logo2" onClick={onFashionLogoClick}>
              <img className="vector-icon2" alt="" src="../vector2.svg" />
              <button className="portfolio2">PORTFOLIO</button>
            </button>
            <div className="menu-right4">
              <div className="links-container2">
                <div className="links7">
                  <button
                    className="frame-parent24"
                    onClick={onFrameButtonClick}
                  >
                    <img
                      className="frame-child23"
                      alt=""
                      src="../frame-199421.svg"
                    />
                    <button className="about4">About</button>
                  </button>
                  <button
                    className="frame-parent24"
                    onClick={openDropDownPopup}
                  >
                    <img
                      className="frame-child23"
                      alt=""
                      src="../frame-199422.svg"
                    />
                    <button className="about4">Links</button>
                  </button>
                  <button className="frame-parent26">
                    <img
                      className="frame-child23"
                      alt=""
                      src="../frame-199423.svg"
                    />
                    <button className="about4">Contact</button>
                  </button>
                </div>
                <button
                  className="component-24"
                  onClick={openFinalOverallNavigationDropDown}
                >
                  <div className="component-2-child11" />
                  <div className="component-2-child12" />
                  <div className="component-2-child13" />
                  <div className="component-2-child14" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="blogpage">
          <div className="blogs-work-in-progress-parent">
            <b className="blogs-work-in">Blogs (Work in Progress)</b>
            <img className="image-6-icon1" alt="" src="../image-61@2x.png" />
          </div>
          <div className="blogcard">
            <div className="date">January 26, 2023</div>
            <div className="blog-title">
              Designing and implementing a voice-controlled roller blind
              [Part-2]
            </div>
            <div className="blog-short-desc">
              Today, we will be designing a system that can open or close the
              roller blind. This will be done with the help of NodeMCU, Blynk
              and IFTTT.....
            </div>
            <button className="read-more16" onClick={onReadMoreClick}>
              <img className="iconssocial" alt="" src="../iconssocial.svg" />
              <img className="linkedin-icon" alt="" src="../-linkedin.svg" />
              <b className="github">LinkedIn</b>
              <b className="github">Read More</b>
              <img className="medium-icon" alt="" src="../-medium.svg" />
              <b className="github">Medium</b>
              <b className="read-more17">Read More</b>
            </button>
          </div>
          <div className="blogcard">
            <div className="date">September 08, 2019</div>
            <div className="blog-title">{`Code splitting & Lazy loading a server side rendered React App`}</div>
            <div className="blog-short-desc">
              Reasoning, approach, and goals. Goals Faster initial load times.
              Users only download the code they need for the features they are
              using. THis...
            </div>
            <button className="read-more16" onClick={onReadMore1Click}>
              <img className="iconssocial" alt="" src="../iconssocial.svg" />
              <img className="linkedin-icon" alt="" src="../-linkedin.svg" />
              <b className="github">LinkedIn</b>
              <b className="github">Read More</b>
              <img className="medium-icon" alt="" src="../-medium.svg" />
              <b className="github">Medium</b>
              <b className="read-more17">Read More</b>
            </button>
          </div>
        </div>
        <div className="frame-parent27">
          <div className="frame-wrapper1">
            <div className="designed-and-developed-by-group">
              <b className="designed-and-developed1">
                Designed and Developed by:
              </b>
              <b className="samyak-jain1">Samyak Jain</b>
            </div>
          </div>
          <img className="image-7-icon1" alt="" src="../image-7@2x.png" />
        </div>
      </div>
      {isDropDownPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeDropDownPopup}
        >
          <DropDown onClose={closeDropDownPopup} />
        </PortalPopup>
      )}
      {isFinalOverallNavigationDropDownOpen && (
        <PortalDrawer
          placement="Top"
          onOutsideClick={closeFinalOverallNavigationDropDown}
        >
          <FinalOverallNavigationDropDown
            onClose={closeFinalOverallNavigationDropDown}
          />
        </PortalDrawer>
      )}
    </>
  );
};

export default BlogsPage;
