import React, { Component } from 'react';
import { surveyContents } from '../surveyContents';
import Navbar from '../components/Navbar/Navbar';
import MySurvey from '../components/MySurvey/MySurvey';
import Footer from '../components/Footer/Footer';


class App extends Component {
  constructor(props) {
    super(props);
    this.deleteSurvey = this.deleteSurvey.bind(this);
    this.state = { surveyContents: surveyContents };
  }

  deleteSurvey(surveyIndex) {
    surveyContents.splice(surveyIndex, 1);
    this.setState({ surveyContents: surveyContents });
  }

  onRouteChange = (route, index) => {
    if (route === 'editSurvey') {
      this.setState({ route: route/index });
    } else {
      this.setState({ route: route });
    }
  }

  render() {
    return (
      <div className = "App" >
        <Navbar />
        <MySurvey deleteSurvey = { this.deleteSurvey }
          surveyContents = { surveyContents }
          onRouteChange = { this.onRouteChange }
        />
        <Footer />
      </div>
    );
  }
}


export default App;
