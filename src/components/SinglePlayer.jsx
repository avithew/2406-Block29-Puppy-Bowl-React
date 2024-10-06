import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { getSinglePuppy } from "../apiRequest";

function SinglePlayer({ puppies, setPuppies }) {
  const [puppy, setPuppy] = useState(null);
  const id = useParams().id;
  useEffect(() => {
    const getPuppy = async () => {
      const data = await getSinglePuppy(id);
      setPuppy(data);
    };
    getPuppy();
  }, []);
  if (!puppy) {
    return (
      <div>
        <h1>Puppy not found</h1>
      </div>
    );
  }
  return (
    <div>
      <h1>Single player page for {puppy.name}</h1>
    </div>
  );
}

export default SinglePlayer;
