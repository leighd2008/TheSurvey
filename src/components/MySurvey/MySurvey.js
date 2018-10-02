import React from 'react';
import Surveys from '../Survey/Survey';
import "./MySurvey.css";

const MySurvey = ({ surveyContents, deleteSurvey, onRouteChange }) => {
  return (
    <div class = "contentContainer" >
      <div class = "contentAndTitles" >
        <div class = "surveysTitle" >
          <span > My Surveys < /span>
        </div>
        <div class = "surveyList" > {
          surveyContents.map((survey, i) => {
            return (
              <Surveys key = { i }
                id = { surveyContents[i].id }
                name = { surveyContents[i].name }
                desc = { surveyContents[i].desc }
                deleteSurvey = { deleteSurvey }
                onRouteChange = { onRouteChange }
              />
            );
          })
        }
        </div>
      </div>
    </div>
  );
}

export default MySurvey;
