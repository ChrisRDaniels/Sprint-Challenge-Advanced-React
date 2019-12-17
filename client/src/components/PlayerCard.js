  
import React from 'react'

const PlayerCard = props => {
    console.log(props)
    return (
        <div className="player-list">
            <div className="player-card" key={props.player.id}>
                <h2>{props.player.name}</h2>
                <h4>Country: {props.player.country}</h4>
                <h4>Searches: {props.player.searches}</h4>
            </div>
        </div>
    )
}

export default PlayerCard