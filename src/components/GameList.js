import React from 'react';
import Game from './Game';
import PropTypes from 'prop-types';


  function GameList(props) { 
    return (
      <React.Fragment>
        <hr />
        {props.gameList.map((game) => 
          <Game 
            whenGameClicked = { props.onGameSelection }
            name={game.name}
            console={game.console}
            rating={game.rating}
            id={game.id}
            key={game.id} />
        )}
      </React.Fragment>
    );
  }

GameList.propTypes = { 
  gameList: PropTypes.array,
  onGameSelection: PropTypes.func
};

export default GameList;