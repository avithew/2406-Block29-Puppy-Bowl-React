import AddNewPlayerForm from "./helper-components/AddNewPlayerForm";
import PlayerCard from "./helper-components/PlayerCard";

function PlayerList({ puppies, setPuppies }) {
  return (
    <div>
      <AddNewPlayerForm setPuppies={setPuppies} />
      {puppies.map((element) => {
        return <PlayerCard puppy={element} />;
      })}
    </div>
  );
}

export default PlayerList;
