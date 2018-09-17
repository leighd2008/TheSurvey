import React from "react";
import deleteIcon from "./delete.svg";
import editIcon from "./edit.svg";
import surveyIcon from "./survey.svg";
import "./Surveys.css";

// = ({ name, desc }) =>

class Survey extends React.Component {
  constructor(props) {
    super(props);
    this.onClickDelete = this.onClickDelete.bind(this);
  }

  onClickDelete() {
    var index = parseInt(this.props.index, 10);
    this.props.deleteSurvey(index)
  }

  render() {
    return (
      <div className="survey">
        <div className="surveyArtwork">
          <img src={surveyIcon} alt="" />
        </div>
        <div className="surveyText">
          <div className="surveyTitle">
            <span>{this.props.name}</span>
          </div>
          <div className="surveyDescription">
            <span>{this.props.desc}</span>
          </div>
        </div>
        <div className="surveyFunctions">
          <img src={editIcon} alt="edit" title="Edit" className="svgIcon" />
          <img
            src={deleteIcon}
            alt="delete"
            title="Delete"
            className="svgIcon"
            onClick={this.onClickDelete}
          />
        </div>
      </div>
    );
  }


};

export default Survey;
