import React from 'react';
import axios from 'axios';
import "./App.css"

class App extends React.Component{
  state = {
    player: []
  }

  componentDidMount = () => {
    this.playerData();
  }

  // Axios call to get player data
  playerData = () => {
    axios
    .get('http://localhost:5000/api/players')
    .then(response =>{
      console.log("response", response.data)
      this.setState({
        player: response.data
      })
    })

    .catch(error => {
      console.log("Unable to fetch data", error)
    })
  }


  // render fetched player data in a card
  render(){
    return (
      <div className="App">
        <h2>Google Women's World Cup Players</h2>
        <div className="player-card">
          {this.state.player.map(players => (
            <div className="player-list">
            <div className="player-cards" key={players.id}>
              <p>Player Name: {players.name}</p>
              <p>Country: {players.country}</p>
              <p>Searches: {players.searches}</p>
            </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
};
export default App;