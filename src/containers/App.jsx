import React, { Component } from 'react';



class App extends Component {
  constructor (props) {
    super(props);
    this.deleteSurvey = this.deleteSurvey.bind(this);
    this.state = {surveyContents: surveyContents};
  }

  deleteSurvey (surveyIndex) {
    surveyContents.splice(surveyIndex, 1);
    this.setState({surveyContents: surveyContents});
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <MySurvey
          deleteSurvey={this.deleteSurvey}
          surveyContents={surveyContents}
        />
        <Footer />
      </div>
    );
  }
}


export default App;
