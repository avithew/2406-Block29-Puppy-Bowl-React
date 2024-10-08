import AddNewPlayerForm from "./helper-components/AddNewPlayerForm";
import PlayerCard from "./helper-components/PlayerCard";
import "./PlayerList.css";

function PlayerList({ puppies, setPuppies }) {
  return (
    <div>
      <AddNewPlayerForm setPuppies={setPuppies} />
      <div className="card-container">
        {puppies.map((element) => {
          return (
            <PlayerCard
              puppy={element}
              puppies={puppies}
              setPuppies={setPuppies}
            />
          );
        })}
      </div>
    </div>
  );
}

export default PlayerList;
