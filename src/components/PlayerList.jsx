import AddNewPlayerForm from "./helper-components/AddNewPlayerForm";
import PlayerCard from "./helper-components/PlayerCard";

function PlayerList({ puppies, setPuppies }) {
  return (
    <div>
      <AddNewPlayerForm />
      {puppies.map((element) => {
        return (
          <PlayerCard
            key={element.name}
            name={element.name}
            breed={element.breed}
          />
        );
      })}
    </div>
  );
}

export default PlayerList;
