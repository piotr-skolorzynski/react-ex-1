import { useState } from "react";

const Player = ({ initialName, symbol, isActive, onChangeName }) => {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditting, setIsEditting] = useState(false);

  const handlePlayerNameChange = (event) => {
    setPlayerName(event.target.value);
  };

  const handleEditClick = () => {
    setIsEditting((prevVal) => !prevVal);

    if (isEditting) {
      onChangeName(symbol, playerName);
    }
  };

  return (
    <li className={isActive ? "active" : null}>
      <span className="player">
        {isEditting ? (
          <input
            type="text"
            required
            value={playerName}
            onChange={handlePlayerNameChange}
          />
        ) : (
          <span className="player-name">{playerName}</span>
        )}

        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditting ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;
