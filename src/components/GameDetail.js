import React from "react";
import PropTypes from "prop-types";

function GameDetail(props){
  const { game, onClickingDelete } = props; 

  return (
    <React.Fragment>
      <h1>Game Detail</h1>
      <h3>{game.console} - {game.names}</h3>
      <button onClick={ props.onClickingEdit }>Update Game</button> 
      <button onClick={()=> onClickingDelete(game.id) }>Delete Game</button> 
      <hr/>
    </React.Fragment>
  );
}

GameDetail.propTypes = {
  game: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default GameDetail;