import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import DropDown from "../components/DropDown";
import PortalPopup from "../components/PortalPopup";
import FinalOverallNavigationDropDown from "../components/FinalOverallNavigationDropDown";
import PortalDrawer from "../components/PortalDrawer";
import "./AboutPage.css";

const AboutPage = () => {
  const navigate = useNavigate();
  const [isDropDownPopupOpen, setDropDownPopupOpen] = useState(false);
  const [
    isFinalOverallNavigationDropDownOpen,
    setFinalOverallNavigationDropDownOpen,
  ] = useState(false);

  const onFashionLogoClick = useCallback(() => {
    navigate("/");
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

  return (
    <>
      <div className="aboutpage">
        <div className="final-navigation-bar3">
          <div className="navigation-inner-bar3">
            <button className="fashion-logo3" onClick={onFashionLogoClick}>
              <img className="vector-icon3" alt="" src="../vector1.svg" />
              <button className="portfolio3">PORTFOLIO</button>
            </button>
            <div className="menu-right5">
              <div className="links-container3">
                <div className="links9">
                  <button className="frame-parent28">
                    <img
                      className="frame-child26"
                      alt=""
                      src="../frame-199418.svg"
                    />
                    <button className="about5">About</button>
                  </button>
                  <button
                    className="frame-parent29"
                    onClick={openDropDownPopup}
                  >
                    <img
                      className="frame-child26"
                      alt=""
                      src="../frame-199425.svg"
                    />
                    <button className="about5">Links</button>
                  </button>
                  <button className="frame-parent30">
                    <img
                      className="frame-child26"
                      alt=""
                      src="../frame-199420.svg"
                    />
                    <button className="about5">Contact</button>
                  </button>
                </div>
                <button
                  className="component-25"
                  onClick={openFinalOverallNavigationDropDown}
                >
                  <div className="component-2-child15" />
                  <div className="component-2-child16" />
                  <div className="component-2-child17" />
                  <div className="component-2-child18" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="aboutpage1">
          <div className="heading-text">
            <b className="about-me">About Me</b>
            <img className="image-6-icon2" alt="" src="../image-6@2x.png" />
          </div>
          <div className="i-am-currently-container">
            <span>{`I am currently a 3rd Year Engineering student of `}</span>
            <span className="vishwakarma-institute-of">
              Vishwakarma Institute of Technology, Pune
            </span>
            <span> studying the course of “</span>
            <span className="instrumentation-and-control">
              Instrumentation and Control Engineering
            </span>
            <span>{`”. Besides this, I like to indulge myself into new technologies and update myself accordingly. This very reason has enabled me to create my portfolio, by learning Figma to design and React for the website. `}</span>
          </div>
          <div className="heading-text">
            <b className="about-me">Education</b>
            <img className="image-6-icon2" alt="" src="../image-6@2x.png" />
          </div>
          <div className="education-cards-parent">
            <div className="education-cards">
              <img
                className="college-image-icon"
                alt=""
                src="../college-image@2x.png"
              />
              <div className="college-details">
                <b className="college-name">
                  Vishwakarma Institute of Technology, Pune
                </b>
                <b className="branch-name">
                  Bachelors Degree in Instrumentation and Control Engineering
                </b>
                <b className="branch-name1">
                  B.TECH in Instrumentation and Control Engineering
                </b>
                <b className="year">2020 - 2024</b>
              </div>
            </div>
            <div className="education-cards">
              <img
                className="college-image-icon"
                alt=""
                src="../college-image1@2x.png"
              />
              <div className="college-details">
                <b className="college-name">
                  Vidya Prasarak Mandal Polytechnic, Thane
                </b>
                <b className="branch-name2">
                  Diploma in Instrumentation Engineering
                </b>
                <b className="year">2018 - 2020</b>
              </div>
            </div>
            <div className="education-cards">
              <img
                className="college-image-icon"
                alt=""
                src="../college-image2@2x.png"
              />
              <div className="college-details">
                <b className="college-name">
                  St John the Baptist High School and Junior College, Thane
                </b>
                <b className="branch-name2">SSC (Class X)</b>
                <b className="year">2018</b>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-parent31">
          <div className="frame-wrapper2">
            <div className="designed-and-developed-by-container">
              <b className="designed-and-developed2">
                Designed and Developed by:
              </b>
              <b className="samyak-jain2">Samyak Jain</b>
            </div>
          </div>
          <img className="image-7-icon2" alt="" src="../image-7@2x.png" />
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

export default AboutPage;
