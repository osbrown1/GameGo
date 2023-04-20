import React from "react";
import GameList from "./GameList";
import GameDetail from './GameDetail';
import EditGameForm from './EditGameForm';
import NewGameForm from './NewGameForm';

class GameControl extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      formVisibleOnPage: false,
      mainGameList: [],
      selectedGame: null,
      editing: false
    };
  }

  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({editing: true });
  }

  handleEditingGameInList = (gameToEdit) => {
    const editedMainGameList = this.state.mainGameList
      .filter(game => game.id !== this.state.selectedGame.id)
      .concat(gameToEdit);
    this.setState({
        mainGameList: editedMainGameList,
        editing: false,
        selectedGame: null
      });
  }

  handleAddingNewGameToList = (newGame) => {
    const newMainGameList = this.state.mainGameList.concat(newGame);
    this.setState({mainGameList: newMainGameList,
                  formVisibleOnPage: false });
  }

  handleChangingSelectedGame = (id) => {
    const selectedGame = this.state.mainGameList.filter(game => game.id === id)[0];
    this.setState({selectedGame: selectedGame});
  }

  handleClick = () => {
    if (this.state.selectedGame != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedGame: null,
        editing: false
      });
    } else {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
    }
  }

  handleDeleteingGame = (id) => {
    const newMainGameList = this.state.mainGameList.filter(game => game.id !== id);
    this.setState({
      mainGameList: newMainGameList,
      selectedGame: null
    });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null; 
    if( this.state.editing) {
      currentlyVisibleState = <EditGameForm game = {this.state.selectedGame} onEditGame = {this.handleEditingGameInList} />
      buttonText = "Return to Game List";
    } else if (this.state.selectedGame != null) {
      currentlyVisibleState = 
      <GameDetail 
      ticket = {this.state.selectedGame} 
      onClickingDelete = {this.handleDeleteingGame} 
      onClickingEdit = {this.handleEditClick} />
      buttonText = "Return to Game List";
    }
    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewGameForm  onNewGameCreation={this.handleAddingNewGameToList} />;
      buttonText = "Return to Game List"; 
    } else {
      currentlyVisibleState = <GameList gameList={this.state.mainGameList} onGameSelection={this.handleChangingSelectedGame} />;
      buttonText = "Add Game"; 
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default GameControl;