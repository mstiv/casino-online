import React from 'react';

const PlayerInfo = (player) => (
    <div className="flex">
          <div className="img-container">
            <img src={player.avatar} alt="user-profile" />
          </div>
          <div className="info">
            <h2>{player.name}</h2>
            <p>{player.event}</p>
          </div>
      </div>
);

export default PlayerInfo;