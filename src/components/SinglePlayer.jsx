import { useParams } from "react-router-dom";

function SinglePlayer({ puppies, setPuppies }) {
  const puppy = puppies.filter((element) => {
    return element.name === useParams().name;
  })[0];
  if (puppy === undefined) {
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
