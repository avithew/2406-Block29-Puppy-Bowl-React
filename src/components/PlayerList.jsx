import AddNewPlayerForm from "./helper-components/AddNewPlayerForm";
import PlayerCard from "./helper-components/PlayerCard";

function PlayerList({ puppies, setPuppies }) {
  return (
    <div>
      <AddNewPlayerForm setPuppies={setPuppies} />
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
  );
}

export default PlayerList;
