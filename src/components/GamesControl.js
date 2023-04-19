import React from "react";
import GamesMerch from "./GamesMerch";

class GamesControl extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      formVisibleOnPage: false
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  render(){
    let currentlyVisibleState = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <GamesMerch />
    } else {
      currentlyVisibleState = <GamesMerch />
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
      </React.Fragment>
    );
  }
}

export default GamesControl;
