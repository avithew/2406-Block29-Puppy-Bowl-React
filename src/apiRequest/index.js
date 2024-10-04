const API_URL = "https://fsa-puppy-bowl.herokuapp.com/api/2406-FTB-MT-WEB-PT";

export async function getAllPuppies() {
  try {
    const response = await fetch(`${API_URL}/players`);
    const data = await response.json();
    return data.data.players;
  } catch (error) {
    console.log("Error fetching puppies: ", error);
  }
}
