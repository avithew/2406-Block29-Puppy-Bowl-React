import { useNavigate } from "react-router-dom";
import { deletePuppy } from "../../apiRequest";
import "./PlayerCard.css";

function PlayerCard({ puppy, setPuppies }) {
  const nav = useNavigate();
  function seeDetails() {
    nav(`puppy/${puppy.id}`);
  }
  function delPuppy() {
    deletePuppy(puppy.id);
    setPuppies((prevState) => {
      return prevState.filter((element) => {
        return element.id != puppy.id;
      });
    });
  }
  return (
    <div className="playerCard">
      <h1>{puppy.name}</h1>
      <img src={puppy.imageUrl} alt="" />
      <p>Breed: {puppy.breed}</p>
      <p>Status: {puppy.status}</p>
      <button onClick={seeDetails}>See Details</button>
      <button onClick={delPuppy}>Delete</button>
    </div>
  );
}

export default PlayerCard;
