import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import DropDown from "../components/DropDown";
import PortalPopup from "../components/PortalPopup";
import FinalOverallNavigationDropDown from "../components/FinalOverallNavigationDropDown";
import PortalDrawer from "../components/PortalDrawer";
import PCB from "../components/PCB";
import TextUtils from "../components/TextUtils";
import Inventory from "../components/Inventory";
import ClosedSpace from "../components/ClosedSpace";
import TextSummarizationNLP from "../components/TextSummarizationNLP";
import RollerBlinds from "../components/RollerBlinds";
import SmartVaporizer from "../components/SmartVaporizer";
import WasteSeg from "../components/WasteSeg";
import SmartDustbin from "../components/SmartDustbin";
import "./ProjectPage.css";

const ProjectPage = () => {
  const navigate = useNavigate();
  const [isDropDownPopupOpen, setDropDownPopupOpen] = useState(false);
  const [
    isFinalOverallNavigationDropDownOpen,
    setFinalOverallNavigationDropDownOpen,
  ] = useState(false);
  const [isPCBPopupOpen, setPCBPopupOpen] = useState(false);
  const [isTextUtilsPopupOpen, setTextUtilsPopupOpen] = useState(false);
  const [isInventoryPopupOpen, setInventoryPopupOpen] = useState(false);
  const [isClosedSpacePopupOpen, setClosedSpacePopupOpen] = useState(false);
  const [isTextSummarizationNLPPopupOpen, setTextSummarizationNLPPopupOpen] =
    useState(false);
  const [isRollerBlindsPopupOpen, setRollerBlindsPopupOpen] = useState(false);
  const [isSmartVaporizerPopupOpen, setSmartVaporizerPopupOpen] =
    useState(false);
  const [isWasteSegPopupOpen, setWasteSegPopupOpen] = useState(false);
  const [isSmartDustbinPopupOpen, setSmartDustbinPopupOpen] = useState(false);

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

  const openInventoryPopup = useCallback(() => {
    setInventoryPopupOpen(true);
  }, []);

  const closeInventoryPopup = useCallback(() => {
    setInventoryPopupOpen(false);
  }, []);

  const openClosedSpacePopup = useCallback(() => {
    setClosedSpacePopupOpen(true);
  }, []);

  const closeClosedSpacePopup = useCallback(() => {
    setClosedSpacePopupOpen(false);
  }, []);

  const openTextSummarizationNLPPopup = useCallback(() => {
    setTextSummarizationNLPPopupOpen(true);
  }, []);

  const closeTextSummarizationNLPPopup = useCallback(() => {
    setTextSummarizationNLPPopupOpen(false);
  }, []);

  const openRollerBlindsPopup = useCallback(() => {
    setRollerBlindsPopupOpen(true);
  }, []);

  const closeRollerBlindsPopup = useCallback(() => {
    setRollerBlindsPopupOpen(false);
  }, []);

  const openSmartVaporizerPopup = useCallback(() => {
    setSmartVaporizerPopupOpen(true);
  }, []);

  const closeSmartVaporizerPopup = useCallback(() => {
    setSmartVaporizerPopupOpen(false);
  }, []);

  const openWasteSegPopup = useCallback(() => {
    setWasteSegPopupOpen(true);
  }, []);

  const closeWasteSegPopup = useCallback(() => {
    setWasteSegPopupOpen(false);
  }, []);

  const openSmartDustbinPopup = useCallback(() => {
    setSmartDustbinPopupOpen(true);
  }, []);

  const closeSmartDustbinPopup = useCallback(() => {
    setSmartDustbinPopupOpen(false);
  }, []);

  return (
    <>
      <div className="projectpage">
        <div className="final-navigation-bar">
          <div className="navigation-inner-bar">
            <button className="fashion-logo" onClick={onFashionLogoClick}>
              <img className="vector-icon" alt="" src="../vector.svg" />
              <button className="portfolio">PORTFOLIO</button>
            </button>
            <div className="menu-right2">
              <div className="links-container">
                <div className="links3">
                  <button className="frame-parent13">
                    <img
                      className="frame-child12"
                      alt=""
                      src="../frame-199415.svg"
                    />
                    <button className="about2">About</button>
                  </button>
                  <button
                    className="frame-parent13"
                    onClick={openDropDownPopup}
                  >
                    <img
                      className="frame-child12"
                      alt=""
                      src="../frame-199416.svg"
                    />
                    <button className="about2">Links</button>
                  </button>
                  <button className="frame-parent15">
                    <img
                      className="frame-child12"
                      alt=""
                      src="../frame-199417.svg"
                    />
                    <button className="about2">Contact</button>
                  </button>
                </div>
                <button
                  className="component-22"
                  onClick={openFinalOverallNavigationDropDown}
                >
                  <div className="component-2-child3" />
                  <div className="component-2-child4" />
                  <div className="component-2-child5" />
                  <div className="component-2-child6" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="final-projects">
          <div className="projects-parent">
            <b className="projects3">Projects</b>
            <img className="image-6-icon" alt="" src="../image-6@2x.png" />
          </div>
          <div className="projectcard">
            <div className="topprojectcard">
              <div className="mask-group">
                <img
                  className="image-10-icon"
                  alt=""
                  src="../image-10@2x.png"
                />
              </div>
              <div className="pcb-defect-detection-using-yol-parent">
                <div className="pcb-defect-detection">
                  PCB Defect Detection using YOLOv8
                </div>
                <div className="pcb-defect-detection1" onClick={openPCBPopup}>
                  PCB Defect Detection using YOLOv8
                </div>
                <div className="pcb-defect-detection-system-us-wrapper">
                  <div className="developed-a-text">{`PCB Defect Detection system using YOLOv8. Achieved an accuracy of 95.2%. The system is capable of detecting various types of defects on printed circuit boards, such as short circuits, open circuits, and component misplacements. `}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="projectcard">
            <div className="topprojectcard">
              <div className="mask-group">
                <img className="image-10-icon" alt="" src="../image-8@2x.png" />
              </div>
              <div className="pcb-defect-detection-using-yol-parent">
                <div className="text-utility-app">Text Utility App</div>
                <div className="text-utility-app1" onClick={openTextUtilsPopup}>
                  Text Utility App
                </div>
                <div className="pcb-defect-detection-system-us-wrapper">
                  <div className="developed-a-text">
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
          <div className="projectcard">
            <div className="topprojectcard">
              <div className="mask-group">
                <img className="image-10-icon" alt="" src="../image-9@2x.png" />
              </div>
              <div className="pcb-defect-detection-using-yol-parent">
                <div className="text-utility-app">
                  Inventory Stock Management using YOLOv7, YOLOv5
                </div>
                <div
                  className="inventory-stock-management1"
                  onClick={openInventoryPopup}
                >
                  Inventory Stock Management using YOLOv7, YOLOv5
                </div>
                <div className="pcb-defect-detection-system-us-wrapper">
                  <div className="developed-a-text">
                    Developed an Inventory Stock Management system using YOLOv7
                    and YOLOv5 models, which can easily detect objects on a
                    shelf in any store or supermarket. Additionally, I also
                    added a feature to implement a count of the detected objects
                    and display the data on the web app.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="projectcard">
            <div className="topprojectcard">
              <div className="mask-group">
                <img
                  className="image-10-icon"
                  alt=""
                  src="../image-11@2x.png"
                />
              </div>
              <div className="pcb-defect-detection-using-yol-parent">
                <div className="text-utility-app">
                  Closed Space Parameter Monitoring and Visualization System
                  using Power BI
                </div>
                <div
                  className="pcb-defect-detection1"
                  onClick={openClosedSpacePopup}
                >
                  Closed Space Parameter Monitoring and Visualization System
                  using Power BI
                </div>
                <div className="pcb-defect-detection-system-us-wrapper">
                  <div className="developed-a-text">
                    Developed a Closed Space Parameter Monitoring and
                    Visualization System to measure parameters such as
                    temperature, pressure, humidity, soil moisture, and air
                    quality of an enclosed space. A web dashboard was created
                    for users to access live data, which was stored on Google
                    Sheets at timely intervals. The data was linked to Power BI
                    to provide visualizations and trends.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="projectcard">
            <div className="topprojectcard">
              <div className="mask-group">
                <img
                  className="image-10-icon"
                  alt=""
                  src="../image-12@2x.png"
                />
              </div>
              <div className="pcb-defect-detection-using-yol-parent">
                <div className="text-utility-app">
                  Text Summarization using NLP
                </div>
                <div
                  className="pcb-defect-detection1"
                  onClick={openTextSummarizationNLPPopup}
                >
                  Text Summarization using NLP
                </div>
                <div className="pcb-defect-detection-system-us-wrapper">
                  <div className="developed-a-text">
                    Developed a Text Summarization system using Python, BART
                    model, and TextRank Algorithm to evaluate the performance of
                    pre-trained models vs custom algorithms. Created a web app
                    using Flask and hosted it on PythonAnywhere to showcase the
                    project's functionality and accessibility.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="projectcard">
            <div className="topprojectcard">
              <div className="mask-group">
                <img
                  className="image-10-icon"
                  alt=""
                  src="../pxl-20220617-010547308-1@2x.png"
                />
              </div>
              <div className="pcb-defect-detection-using-yol-parent">
                <div className="text-utility-app">
                  Voice Controlled Roller Blinds
                </div>
                <div
                  className="pcb-defect-detection1"
                  onClick={openRollerBlindsPopup}
                >
                  Voice Controlled Roller Blinds
                </div>
                <div className="pcb-defect-detection-system-us-wrapper">
                  <div className="developed-a-text">
                    Developed a Voice Controlled Roller Blinds system using
                    Blynk IoT, Google Assistant, and IFTTT. The system allows
                    users to control their roller blinds using voice commands or
                    by pressing a button on the app.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="projectcard">
            <div className="topprojectcard">
              <div className="mask-group">
                <img
                  className="image-10-icon"
                  alt=""
                  src="../image-14@2x.png"
                />
              </div>
              <div className="pcb-defect-detection-using-yol-parent">
                <div className="text-utility-app">
                  Smart Vaporizer using IoT
                </div>
                <div
                  className="inventory-stock-management1"
                  onClick={openSmartVaporizerPopup}
                >
                  Smart Vaporizer using IoT
                </div>
                <div className="pcb-defect-detection-system-us-wrapper">
                  <div className="developed-a-text">
                    Developed a Smart Vaporizer using Arduino UNO R3, Relay,
                    water level detection sensor, and wire temperature sensor.
                    The project involved simulating and building a hardware
                    system that measures water level and temperature to optimize
                    electricity usage and user experience.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="projectcard">
            <div className="topprojectcard">
              <div className="mask-group">
                <img
                  className="image-10-icon"
                  alt=""
                  src="../image-15@2x.png"
                />
              </div>
              <div className="pcb-defect-detection-using-yol-parent">
                <div className="text-utility-app">
                  Waste Segregation using Arduino UNO
                </div>
                <div
                  className="inventory-stock-management1"
                  onClick={openWasteSegPopup}
                >
                  Waste Segregation using Arduino UNO
                </div>
                <div className="pcb-defect-detection-system-us-wrapper">
                  <div className="developed-a-text">
                    Designed a waste segregating dustbin that could segregate
                    the waste into two categories viz, dry and wet waste. I used
                    TinkerCAD to do the simulation of the project.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="projectcard">
            <div className="topprojectcard">
              <div className="mask-group8">
                <img
                  className="image-16-icon"
                  alt=""
                  src="../image-16@2x.png"
                />
              </div>
              <div className="pcb-defect-detection-using-yol-parent">
                <div className="text-utility-app">Smart Dustbin</div>
                <div
                  className="inventory-stock-management1"
                  onClick={openSmartDustbinPopup}
                >
                  Smart Dustbin
                </div>
                <div className="pcb-defect-detection-system-us-wrapper">
                  <div className="developed-a-text">
                    Designed a Smart Dustbin that could open its lid
                    automatically whenever a user approaches it. This simple
                    system makes the dustbin accessible to the user only when it
                    is empty or has room for more trash. Furthermore, this will
                    keep the individual throwing the garbage and the surrounding
                    area clean.
                  </div>
                </div>
              </div>
            </div>
          </div>
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
      {isInventoryPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeInventoryPopup}
        >
          <Inventory onClose={closeInventoryPopup} />
        </PortalPopup>
      )}
      {isClosedSpacePopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeClosedSpacePopup}
        >
          <ClosedSpace onClose={closeClosedSpacePopup} />
        </PortalPopup>
      )}
      {isTextSummarizationNLPPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeTextSummarizationNLPPopup}
        >
          <TextSummarizationNLP onClose={closeTextSummarizationNLPPopup} />
        </PortalPopup>
      )}
      {isRollerBlindsPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeRollerBlindsPopup}
        >
          <RollerBlinds onClose={closeRollerBlindsPopup} />
        </PortalPopup>
      )}
      {isSmartVaporizerPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSmartVaporizerPopup}
        >
          <SmartVaporizer onClose={closeSmartVaporizerPopup} />
        </PortalPopup>
      )}
      {isWasteSegPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeWasteSegPopup}
        >
          <WasteSeg onClose={closeWasteSegPopup} />
        </PortalPopup>
      )}
      {isSmartDustbinPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSmartDustbinPopup}
        >
          <SmartDustbin onClose={closeSmartDustbinPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default ProjectPage;
