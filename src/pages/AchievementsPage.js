import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import DropDown from "../components/DropDown";
import PortalPopup from "../components/PortalPopup";
import FinalOverallNavigationDropDown from "../components/FinalOverallNavigationDropDown";
import PortalDrawer from "../components/PortalDrawer";
import MetaCertificate from "../components/MetaCertificate";
import ISACertificate from "../components/ISACertificate";
import UtkarshCertificate from "../components/UtkarshCertificate";
import TechnomelaCertificate from "../components/TechnomelaCertificate";
import BusinessIdeathonCertificate from "../components/BusinessIdeathonCertificate";
import Merit21Certificate from "../components/Merit21Certificate";
import TechnoPoornimaCertificate from "../components/TechnoPoornimaCertificate";
import SpaceAppsCertificate from "../components/SpaceAppsCertificate";
import PravinyaCertificate from "../components/PravinyaCertificate";
import Merit19Certificate from "../components/Merit19Certificate";
import TechnocratzCertificate from "../components/TechnocratzCertificate";
import SketchCertificate from "../components/SketchCertificate";
import "./AchievementsPage.css";

const AchievementsPage = () => {
  const navigate = useNavigate();
  const [isDropDownPopupOpen, setDropDownPopupOpen] = useState(false);
  const [
    isFinalOverallNavigationDropDownOpen,
    setFinalOverallNavigationDropDownOpen,
  ] = useState(false);
  const [isMetaCertificatePopupOpen, setMetaCertificatePopupOpen] =
    useState(false);
  const [isISACertificatePopupOpen, setISACertificatePopupOpen] =
    useState(false);
  const [isUtkarshCertificatePopupOpen, setUtkarshCertificatePopupOpen] =
    useState(false);
  const [isTechnomelaCertificatePopupOpen, setTechnomelaCertificatePopupOpen] =
    useState(false);
  const [
    isBusinessIdeathonCertificatePopupOpen,
    setBusinessIdeathonCertificatePopupOpen,
  ] = useState(false);
  const [isMerit21CertificatePopupOpen, setMerit21CertificatePopupOpen] =
    useState(false);
  const [
    isTechnoPoornimaCertificatePopupOpen,
    setTechnoPoornimaCertificatePopupOpen,
  ] = useState(false);
  const [isSpaceAppsCertificatePopupOpen, setSpaceAppsCertificatePopupOpen] =
    useState(false);
  const [isPravinyaCertificatePopupOpen, setPravinyaCertificatePopupOpen] =
    useState(false);
  const [isMerit19CertificatePopupOpen, setMerit19CertificatePopupOpen] =
    useState(false);
  const [
    isTechnocratzCertificatePopupOpen,
    setTechnocratzCertificatePopupOpen,
  ] = useState(false);
  const [isSketchCertificatePopupOpen, setSketchCertificatePopupOpen] =
    useState(false);

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

  const openMetaCertificatePopup = useCallback(() => {
    setMetaCertificatePopupOpen(true);
  }, []);

  const closeMetaCertificatePopup = useCallback(() => {
    setMetaCertificatePopupOpen(false);
  }, []);

  const openISACertificatePopup = useCallback(() => {
    setISACertificatePopupOpen(true);
  }, []);

  const closeISACertificatePopup = useCallback(() => {
    setISACertificatePopupOpen(false);
  }, []);

  const openUtkarshCertificatePopup = useCallback(() => {
    setUtkarshCertificatePopupOpen(true);
  }, []);

  const closeUtkarshCertificatePopup = useCallback(() => {
    setUtkarshCertificatePopupOpen(false);
  }, []);

  const openTechnomelaCertificatePopup = useCallback(() => {
    setTechnomelaCertificatePopupOpen(true);
  }, []);

  const closeTechnomelaCertificatePopup = useCallback(() => {
    setTechnomelaCertificatePopupOpen(false);
  }, []);

  const openBusinessIdeathonCertificatePopup = useCallback(() => {
    setBusinessIdeathonCertificatePopupOpen(true);
  }, []);

  const closeBusinessIdeathonCertificatePopup = useCallback(() => {
    setBusinessIdeathonCertificatePopupOpen(false);
  }, []);

  const openMerit21CertificatePopup = useCallback(() => {
    setMerit21CertificatePopupOpen(true);
  }, []);

  const closeMerit21CertificatePopup = useCallback(() => {
    setMerit21CertificatePopupOpen(false);
  }, []);

  const openTechnoPoornimaCertificatePopup = useCallback(() => {
    setTechnoPoornimaCertificatePopupOpen(true);
  }, []);

  const closeTechnoPoornimaCertificatePopup = useCallback(() => {
    setTechnoPoornimaCertificatePopupOpen(false);
  }, []);

  const openSpaceAppsCertificatePopup = useCallback(() => {
    setSpaceAppsCertificatePopupOpen(true);
  }, []);

  const closeSpaceAppsCertificatePopup = useCallback(() => {
    setSpaceAppsCertificatePopupOpen(false);
  }, []);

  const openPravinyaCertificatePopup = useCallback(() => {
    setPravinyaCertificatePopupOpen(true);
  }, []);

  const closePravinyaCertificatePopup = useCallback(() => {
    setPravinyaCertificatePopupOpen(false);
  }, []);

  const openMerit19CertificatePopup = useCallback(() => {
    setMerit19CertificatePopupOpen(true);
  }, []);

  const closeMerit19CertificatePopup = useCallback(() => {
    setMerit19CertificatePopupOpen(false);
  }, []);

  const openTechnocratzCertificatePopup = useCallback(() => {
    setTechnocratzCertificatePopupOpen(true);
  }, []);

  const closeTechnocratzCertificatePopup = useCallback(() => {
    setTechnocratzCertificatePopupOpen(false);
  }, []);

  const openSketchCertificatePopup = useCallback(() => {
    setSketchCertificatePopupOpen(true);
  }, []);

  const closeSketchCertificatePopup = useCallback(() => {
    setSketchCertificatePopupOpen(false);
  }, []);

  return (
    <>
      <div className="achievementspage">
        <div className="final-navigation-bar1">
          <div className="navigation-inner-bar1">
            <button className="fashion-logo1" onClick={onFashionLogoClick}>
              <img className="vector-icon1" alt="" src="../vector1.svg" />
              <button className="portfolio1">PORTFOLIO</button>
            </button>
            <div className="menu-right3">
              <div className="links-container1">
                <div className="links5">
                  <button
                    className="frame-parent16"
                    onClick={onFrameButtonClick}
                  >
                    <img
                      className="frame-child15"
                      alt=""
                      src="../frame-199418.svg"
                    />
                    <button className="about3">About</button>
                  </button>
                  <button
                    className="frame-parent16"
                    onClick={openDropDownPopup}
                  >
                    <img
                      className="frame-child15"
                      alt=""
                      src="../frame-199419.svg"
                    />
                    <button className="about3">Links</button>
                  </button>
                  <button className="frame-parent18">
                    <img
                      className="frame-child15"
                      alt=""
                      src="../frame-199420.svg"
                    />
                    <button className="about3">Contact</button>
                  </button>
                </div>
                <button
                  className="component-23"
                  onClick={openFinalOverallNavigationDropDown}
                >
                  <div className="component-2-child7" />
                  <div className="component-2-child8" />
                  <div className="component-2-child9" />
                  <div className="component-2-child10" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="achievementspage1">
          <div className="achievements-wrapper">
            <b className="achievements2">Achievements</b>
          </div>
          <div className="frame-div">
            <div className="parent">
              <b className="b">2023</b>
              <div className="frame-child18" />
            </div>
            <div className="built-my-own-portfolio-website-parent">
              <div className="built-my-own">
                Built my own portfolio website from scratch
              </div>
              <div
                className="learnt-reactjs-basics"
                onClick={openMetaCertificatePopup}
              >
                Learnt ReactJS Basics by META
              </div>
              <div className="built-my-own">
                Enrolled in multiple Coursera courses for “Front-End Web
                Development”
              </div>
              <div className="built-my-own">
                Wrote my First Technical Blog on Medium.com
              </div>
            </div>
          </div>
          <div className="frame-div">
            <div className="parent">
              <b className="b1">2022</b>
              <div className="frame-child19" />
            </div>
            <div className="built-my-own-portfolio-website-parent">
              <div
                className="learnt-reactjs-basics"
                onClick={openISACertificatePopup}
              >
                Volunteered as a Database Co-ordinator for ISA (International
                Society of Automation).
              </div>
              <div
                className="learnt-reactjs-basics"
                onClick={openUtkarshCertificatePopup}
              >
                Participated in a social event Utkarsh under VIT SOCIAL and
                WELFARE Department
              </div>
            </div>
          </div>
          <div className="frame-div">
            <div className="parent">
              <b className="b">2021</b>
              <div className="frame-child20" />
            </div>
            <div className="built-my-own-portfolio-website-parent">
              <div
                className="learnt-reactjs-basics"
                onClick={openTechnomelaCertificatePopup}
              >
                Participated in State Level Project Competition (TECHNOMELA –
                2021)
              </div>
              <div
                className="learnt-reactjs-basics"
                onClick={openBusinessIdeathonCertificatePopup}
              >
                Secured First Rank in Business Ideathon (Polyspark 2021)
              </div>
              <div
                className="learnt-reactjs-basics"
                onClick={openMerit21CertificatePopup}
              >
                Ranked first again in my department in college
              </div>
            </div>
          </div>
          <div className="frame-div">
            <div className="parent1">
              <b className="b">2020</b>
              <div className="frame-child21" />
            </div>
            <div className="winner-in-9th-techno-gurupoorn-parent">
              <div
                className="learnt-reactjs-basics"
                onClick={openTechnoPoornimaCertificatePopup}
              >
                Winner in 9th Techno-Gurupoornima Online Project Competition
              </div>
              <div
                className="learnt-reactjs-basics"
                onClick={openSpaceAppsCertificatePopup}
              >
                Participated in pre-qualifier round of International Space App
                Challenge
              </div>
              <div
                className="learnt-reactjs-basics"
                onClick={openPravinyaCertificatePopup}
              >
                Participated in State Level Technical Paper Presentation
                (Pravinya 2020)
              </div>
            </div>
          </div>
          <div className="frame-div">
            <div className="parent">
              <b className="b4">2019</b>
              <div className="frame-child22" />
            </div>
            <div className="built-my-own-portfolio-website-parent">
              <div
                className="learnt-reactjs-basics"
                onClick={openMerit19CertificatePopup}
              >
                Ranked first in my department in college
              </div>
              <div
                className="learnt-reactjs-basics"
                onClick={openTechnocratzCertificatePopup}
              >
                Runner up in State Level Technical Paper Presentation
                (Technocratz 2019)
              </div>
              <div
                className="learnt-reactjs-basics"
                onClick={openSketchCertificatePopup}
              >
                Secured third rank in Sketch Competition in Polyspark-2019
              </div>
            </div>
          </div>
        </div>
        <div className="frame-parent23">
          <div className="frame-wrapper">
            <div className="designed-and-developed-by-parent">
              <b className="designed-and-developed">
                Designed and Developed by:
              </b>
              <b className="samyak-jain">Samyak Jain</b>
            </div>
          </div>
          <img className="image-7-icon" alt="" src="../image-7@2x.png" />
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
      {isMetaCertificatePopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeMetaCertificatePopup}
        >
          <MetaCertificate onClose={closeMetaCertificatePopup} />
        </PortalPopup>
      )}
      {isISACertificatePopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeISACertificatePopup}
        >
          <ISACertificate onClose={closeISACertificatePopup} />
        </PortalPopup>
      )}
      {isUtkarshCertificatePopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeUtkarshCertificatePopup}
        >
          <UtkarshCertificate onClose={closeUtkarshCertificatePopup} />
        </PortalPopup>
      )}
      {isTechnomelaCertificatePopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeTechnomelaCertificatePopup}
        >
          <TechnomelaCertificate onClose={closeTechnomelaCertificatePopup} />
        </PortalPopup>
      )}
      {isBusinessIdeathonCertificatePopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeBusinessIdeathonCertificatePopup}
        >
          <BusinessIdeathonCertificate
            onClose={closeBusinessIdeathonCertificatePopup}
          />
        </PortalPopup>
      )}
      {isMerit21CertificatePopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeMerit21CertificatePopup}
        >
          <Merit21Certificate onClose={closeMerit21CertificatePopup} />
        </PortalPopup>
      )}
      {isTechnoPoornimaCertificatePopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeTechnoPoornimaCertificatePopup}
        >
          <TechnoPoornimaCertificate
            onClose={closeTechnoPoornimaCertificatePopup}
          />
        </PortalPopup>
      )}
      {isSpaceAppsCertificatePopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSpaceAppsCertificatePopup}
        >
          <SpaceAppsCertificate onClose={closeSpaceAppsCertificatePopup} />
        </PortalPopup>
      )}
      {isPravinyaCertificatePopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePravinyaCertificatePopup}
        >
          <PravinyaCertificate onClose={closePravinyaCertificatePopup} />
        </PortalPopup>
      )}
      {isMerit19CertificatePopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeMerit19CertificatePopup}
        >
          <Merit19Certificate onClose={closeMerit19CertificatePopup} />
        </PortalPopup>
      )}
      {isTechnocratzCertificatePopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeTechnocratzCertificatePopup}
        >
          <TechnocratzCertificate onClose={closeTechnocratzCertificatePopup} />
        </PortalPopup>
      )}
      {isSketchCertificatePopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSketchCertificatePopup}
        >
          <SketchCertificate onClose={closeSketchCertificatePopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default AchievementsPage;
