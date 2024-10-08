import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { getSinglePuppy } from "../apiRequest";
import "./SinglePlayer.css";

function SinglePlayer({ puppies, setPuppies }) {
  const nav = useNavigate();
  const [puppy, setPuppy] = useState(null);
  const id = useParams().id;

  useEffect(() => {
    const getPuppy = async () => {
      const data = await getSinglePuppy(id);
      setPuppy(data);
    };
    getPuppy();
  }, []);

  function handleClick() {
    nav("/");
  }

  if (!puppy) {
    return (
      <div>
        <h1>Puppy not found</h1>
      </div>
    );
  } else {
    return (
      <div className="singlePlayer">
        <h1>Single player page for {puppy.name}</h1>
        <img src={puppy.imageUrl} alt="" />
        <p>Breed: {puppy.breed}</p>
        <p>Status: {puppy.status}</p>
        <button onClick={handleClick}>Go Back</button>
      </div>
    );
  }
}

export default SinglePlayer;
