import React from "react";
import PropTypes from "prop-types";

function Game(props) {
  return (
    <React.Fragment>
      <div onClick = {() => props.whenGameClicked(props.id)}>
        <h3>{props.console} | {props.names}</h3>
        <p><em>{props.rating}</em></p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Game.propTypes = {
  names: PropTypes.string,
  console: PropTypes.string,
  rating: PropTypes.string,
  id: PropTypes.string,
  whenGameClicked: PropTypes.func
};

export default Game;