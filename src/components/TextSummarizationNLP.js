import { useCallback } from "react";
import "./TextSummarizationNLP.css";

const TextSummarizationNLP = ({ onClose }) => {
  const onReadMoreClick = useCallback(() => {
    window.open("https://sammy970.pythonanywhere.com/");
  }, []);

  return (
    <div className="textsummarizationnlp">
      <img className="nlp-icon" alt="" src="../5-nlp@2x.png" />
      <button className="read-more6" onClick={onReadMoreClick}>
        <b className="read-more7">Check out the Web App</b>
      </button>
    </div>
  );
};

export default TextSummarizationNLP;
