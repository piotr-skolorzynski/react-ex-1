import { useState } from "react";

const Player = ({ initialName, symbol }) => {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditting, setIsEditting] = useState(false);

  const handlePlayerNameChange = (event) => {
    setPlayerName(event.target.value);
  };

  const handleEditClick = () => setIsEditting((prevVal) => !prevVal);

  return (
    <li>
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
