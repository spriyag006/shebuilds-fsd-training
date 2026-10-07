import { useState } from "react";
import cat from "../catoo.jpeg";

function LikesDislikes() {
  const [likes, setLikes] = useState(0);
  const [disLikes, setdisLikes] = useState(0);

  const handleLikes = () => {
    setLikes(likes + 1);
  };
  
  const handleDisLikes = () => {
    setdisLikes(disLikes + 1);
  }

  return (
    <div>
      <h1>Likes and Dislikes</h1>

      <img src={cat} alt="Cat" width="300" />

      <p>Likes: {likes}</p>
      <button onClick={handleLikes}> Like</button>

      <p>Dislikes: {disLikes}</p>
      <button onClick={handleDisLikes}> Dislike</button>
    </div>
  );
}

export default LikesDislikes;