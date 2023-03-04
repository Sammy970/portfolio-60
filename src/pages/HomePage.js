import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import DropDown from "../components/DropDown";
import PortalPopup from "../components/PortalPopup";
import FinalOverallNavigationDropDown from "../components/FinalOverallNavigationDropDown";
import PortalDrawer from "../components/PortalDrawer";
import PCB from "../components/PCB";
import TextUtils from "../components/TextUtils";
import "./HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();
  const [isDropDownPopupOpen, setDropDownPopupOpen] = useState(false);
  const [
    isFinalOverallNavigationDropDownOpen,
    setFinalOverallNavigationDropDownOpen,
  ] = useState(false);
  const [isPCBPopupOpen, setPCBPopupOpen] = useState(false);
  const [isTextUtilsPopupOpen, setTextUtilsPopupOpen] = useState(false);

  const onFashionLogoClick = useCallback(() => {
    // Please sync "ShoppingLandingPageFinal" to the project
  }, []);

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

  const onMediumBtnClick = useCallback(() => {
    window.open("https://samyak970.medium.com");
  }, []);

  const onGithubBtnClick = useCallback(() => {
    window.open("https://github.com/Sammy970");
  }, []);

  const onLinkedInBtnClick = useCallback(() => {
    window.open("https://www.linkedin.com");
  }, []);

  const onReadMoreClick = useCallback(() => {
    window.open("https://www.google.com");
  }, []);

  const onReadMore1Click = useCallback(() => {
    window.open("https://www.google.com");
  }, []);

  const openPCBPopup = useCallback(() => {
    setPCBPopupOpen(true);
  }, []);

  const closePCBPopup = useCallback(() => {
    setPCBPopupOpen(false);
  }, []);

  const openTextUtilsPopup = useCallback(() => {
    setTextUtilsPopupOpen(true);
  }, []);

  const closeTextUtilsPopup = useCallback(() => {
    setTextUtilsPopupOpen(false);
  }, []);

  return (
    <>
      <div className="homepage">
        <div className="final-navigation-bar4">
          <div className="navigation-inner-bar4">
            <button className="fashion-logo4" onClick={onFashionLogoClick}>
              <img className="vector-icon4" alt="" src="../vector1.svg" />
              <button className="portfolio4">PORTFOLIO</button>
            </button>
            <div className="menu-right6">
              <div className="links-container4">
                <div className="links11">
                  <button
                    className="frame-parent32"
                    onClick={onFrameButtonClick}
                  >
                    <img
                      className="frame-child29"
                      alt=""
                      src="../frame-199418.svg"
                    />
                    <button className="about6">About</button>
                  </button>
                  <button
                    className="frame-parent32"
                    onClick={openDropDownPopup}
                  >
                    <img
                      className="frame-child29"
                      alt=""
                      src="../frame-199425.svg"
                    />
                    <button className="about6">Links</button>
                  </button>
                  <button className="frame-parent34">
                    <img
                      className="frame-child29"
                      alt=""
                      src="../frame-199420.svg"
                    />
                    <button className="about6">Contact</button>
                  </button>
                </div>
                <button
                  className="component-26"
                  onClick={openFinalOverallNavigationDropDown}
                >
                  <div className="component-2-child19" />
                  <div className="component-2-child20" />
                  <div className="component-2-child21" />
                  <div className="component-2-child22" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="final-hero-section">
          <div className="hero-section">
            <div className="hey-im-samyak-jain-parent">
              <b className="hey-im-samyak-container">
                <p className="hey-im">Hey, I’m</p>
                <p className="samyak-jain3">Samyak Jain</p>
              </b>
              <b className="currently-a-student">
                Currently a student at VIT, Pune
              </b>
            </div>
            <img className="image-3-icon" alt="" src="../image-3@2x.png" />
            <img
              className="hero-section-child"
              alt=""
              src="../ellipse-3@2x.png"
            />
          </div>
        </div>
        <div className="final-contact-me-section">
          <div className="final-contact-me-section-inner">
            <div className="image-4-parent">
              <img className="image-4-icon" alt="" src="../image-4@2x.png" />
              <button className="mediumbtn" onClick={onMediumBtnClick}>
                <img
                  className="iconssocial2"
                  alt=""
                  src="../iconssocial2.svg"
                />
                <img
                  className="linkedin-icon2"
                  alt=""
                  src="../-linkedin2.svg"
                />
                <b className="github2">LinkedIn</b>
                <b className="github2">Read More</b>
                <img className="medium-icon2" alt="" src="../-medium2.svg" />
                <b className="medium2">Medium</b>
                <b className="github2">Read More</b>
              </button>
              <button className="githubbtn" onClick={onGithubBtnClick}>
                <img
                  className="iconssocial3"
                  alt=""
                  src="../iconssocial3.svg"
                />
                <img
                  className="linkedin-icon2"
                  alt=""
                  src="../-linkedin3.svg"
                />
                <b className="github2">LinkedIn</b>
                <b className="medium2">Github</b>
                <img className="medium-icon3" alt="" src="../-medium3.svg" />
                <b className="github2">Medium</b>
                <b className="github2">Read More</b>
              </button>
              <button className="githubbtn" onClick={onLinkedInBtnClick}>
                <img
                  className="iconssocial2"
                  alt=""
                  src="../iconssocial4.svg"
                />
                <img
                  className="linkedin-icon4"
                  alt=""
                  src="../-linkedin4.svg"
                />
                <b className="medium2">LinkedIn</b>
                <b className="github2">Read More</b>
                <img className="medium-icon3" alt="" src="../-medium4.svg" />
                <b className="github2">Medium</b>
                <b className="github2">Read More</b>
              </button>
              <img className="image-5-icon" alt="" src="../image-41@2x.png" />
            </div>
          </div>
        </div>
        <div className="final-new-blogs">
          <div className="recent-blogs-parent">
            <b className="recent-blogs">Recent Blogs</b>
            <img className="image-6-icon4" alt="" src="../image-64@2x.png" />
          </div>
          <div className="blogcard2">
            <div className="date2">September 08, 2019</div>
            <div className="blog-title2">{`Code splitting & Lazy loading a server side rendered React App`}</div>
            <div className="blog-short-desc2">
              Reasoning, approach, and goals. Goals Faster initial load times.
              Users only download the code they need for the features they are
              using. THis...
            </div>
            <button className="read-more23" onClick={onReadMoreClick}>
              <img className="iconssocial2" alt="" src="../iconssocial5.svg" />
              <img className="linkedin-icon2" alt="" src="../-linkedin5.svg" />
              <b className="github2">LinkedIn</b>
              <b className="github2">Read More</b>
              <img className="medium-icon3" alt="" src="../-medium5.svg" />
              <b className="github2">Medium</b>
              <b className="medium2">Read More</b>
            </button>
          </div>
          <div className="blogcard2">
            <div className="date2">September 08, 2019</div>
            <div className="blog-title2">{`Code splitting & Lazy loading a server side rendered React App`}</div>
            <div className="blog-short-desc2">
              Reasoning, approach, and goals. Goals Faster initial load times.
              Users only download the code they need for the features they are
              using. THis...
            </div>
            <button className="read-more23" onClick={onReadMore1Click}>
              <img className="iconssocial2" alt="" src="../iconssocial5.svg" />
              <img className="linkedin-icon2" alt="" src="../-linkedin5.svg" />
              <b className="github2">LinkedIn</b>
              <b className="github2">Read More</b>
              <img className="medium-icon3" alt="" src="../-medium5.svg" />
              <b className="github2">Medium</b>
              <b className="medium2">Read More</b>
            </button>
          </div>
          <button className="frame-parent35">
            <img className="frame-child29" alt="" src="../frame-199430.svg" />
            <button className="check-out-more-container">
              <span className="check-out-more">{`Check out more `}</span>
              <b className="check-out-more">blogs</b>
              <span className="check-out-more">...</span>
            </button>
          </button>
        </div>
        <div className="final-new-projects">
          <div className="new-projects-parent">
            <b className="recent-blogs">New Projects</b>
            <img className="image-6-icon4" alt="" src="../image-64@2x.png" />
          </div>
          <div className="projectcard9">
            <div className="topprojectcard9">
              <div className="mask-group9">
                <img
                  className="image-10-icon1"
                  alt=""
                  src="../image-101@2x.png"
                />
              </div>
              <div className="pcb-defect-detection-using-yol-group">
                <div className="pcb-defect-detection3">
                  PCB Defect Detection using YOLOv8
                </div>
                <div className="pcb-defect-detection4" onClick={openPCBPopup}>
                  PCB Defect Detection using YOLOv8
                </div>
                <div className="pcb-defect-detection-system-us-container">
                  <div className="pcb-defect-detection5">{`PCB Defect Detection system using YOLOv8. Achieved an accuracy of 95.2%. The system is capable of detecting various types of defects on printed circuit boards, such as short circuits, open circuits, and component misplacements. `}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="projectcard9">
            <div className="topprojectcard9">
              <div className="mask-group9">
                <img
                  className="image-10-icon1"
                  alt=""
                  src="../image-81@2x.png"
                />
              </div>
              <div className="pcb-defect-detection-using-yol-group">
                <div className="text-utility-app2">Text Utility App</div>
                <div className="text-utility-app3" onClick={openTextUtilsPopup}>
                  Text Utility App
                </div>
                <div className="pcb-defect-detection-system-us-container">
                  <div className="pcb-defect-detection5">
                    Developed a Text Utility App using ReactJS that provides
                    users with a web-based platform for formatting text. The app
                    includes features like converting text to uppercase,
                    lowercase, and capitalizing the first word, as well as a
                    clear function to reset the text.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="frame-parent35">
            <img className="frame-child29" alt="" src="../frame-199430.svg" />
            <button className="check-out-more-container">
              <span className="check-out-more">{`Check out more `}</span>
              <b className="check-out-more">projects</b>
              <span className="check-out-more">...</span>
            </button>
          </button>
        </div>
        <div className="frame-parent37">
          <div className="frame-wrapper3">
            <div className="designed-and-developed-by-parent1">
              <b className="designed-and-developed3">
                Designed and Developed by:
              </b>
              <b className="samyak-jain4">Samyak Jain</b>
            </div>
          </div>
          <img className="image-7-icon3" alt="" src="../image-73@2x.png" />
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
      {isPCBPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePCBPopup}
        >
          <PCB onClose={closePCBPopup} />
        </PortalPopup>
      )}
      {isTextUtilsPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeTextUtilsPopup}
        >
          <TextUtils onClose={closeTextUtilsPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default HomePage;
