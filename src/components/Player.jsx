import { useState } from "react";

const Player = ({ name, symbol }) => {
  const [isEditting, setIsEditting] = useState(false);

  const handleEditClick = () => setIsEditting((prev) => !prev);

  return (
    <li>
      <span className="player">
        {isEditting ? (
          <input type="text" required />
        ) : (
          <span className="player-name">{name}</span>
        )}

        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditting ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;
