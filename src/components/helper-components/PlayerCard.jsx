import { useNavigate } from "react-router-dom";

function PlayerCard({ puppy }) {
  const nav = useNavigate();
  function handleClick() {
    nav(`puppy/${puppy.id}`);
  }
  return (
    <div className="playerCard">
      <h1>{puppy.name}</h1>
      <img src={puppy.imageUrl} alt="" />
      <p>Breed: {puppy.breed}</p>
      <p>Status: {puppy.status}</p>
      <button onClick={handleClick}>See Details</button>
    </div>
  );
}

export default PlayerCard;
