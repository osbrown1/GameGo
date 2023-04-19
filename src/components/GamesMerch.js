import React from 'react';

const gamesMerch = [
  {
    console: "PC",
    selection: [
      "World of Warcraft",
      "Sims",
      "Roller Coaster Tycoon",
    ],
  },
  
  {
    console: "PlayStaytion",
    selection: [
      "Mortal Kombat",
      "Crash Bandicoot",
      "Assassin's Creed",
      "Fallout New Vegas",
      "The Last of Us",
      "Street Fighter",
    ],
  },

  {
    console: "Xbox",
    selection: [
      "Halo",
      "Gears of war",
      "Sea of Thieves",
      "Star Wars",
      "Fable",
    ],
  },

  {
    console: "Nintendo",
      selection: [
        "Gangbeasts",
        "Mario Kart",
        "Smash",
        "Mario Party",
        "Zelda",
      ],
  },
];

class Games extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      consoleIndex: 0,
    };
  }

  handleGameSystem = (g) => {
    this.setState({ consoleIndex: g.target.value });
  };

  render() {
    return (
      <React.Fragment>
      <h2 class="h2-body">New Games for: </h2>
      <br />
      <select
        value={this.state.gamesIndex}
        onChange={this.handleGameSystem}
        class="fancy-btn btn-lg btn-block dropdown-toggle"
      >
        <option value="0">PC</option>
        <option value="1">PlayStaytion</option>
        <option value="2">Xbox</option>
        <option value="3">Nintendo</option>
      </select>
      <br/>
      <br/>
      <ul>
        {gamesMerch[this.state.consoleIndex].selection.map(
          (fun) => (
            <li class="li-body">{fun}</li>
          )
        )}
      </ul>
    </React.Fragment>
    );
  }
}

export default Games;