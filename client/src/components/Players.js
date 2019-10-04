import React from 'react'
import axios from 'axios'
import PlayerCard from './PlayerCard'

export default class Players extends React.Component {
    state = {
        players: [],
    }
    componentDidMount() {
        axios
        .get('http://localhost:5000/api/players')
        .then(response => {
            console.log(response)
            this.setState({
                players: response.data
            })
            console.log('players', this.state.players)
        })
        .catch(err => {
            console.log('the data was not fetched', err)
        })
    }
    
    render() {
        return (
            <div data-testid="player-container">
                {this.state.players.map(item => 
                    <PlayerCard player={item} />
                )}
            </div>
        )
    }
}