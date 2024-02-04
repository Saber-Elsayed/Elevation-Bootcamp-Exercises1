import React, { useState } from "react";
function LikesApp() {
  const [likes, setLikes] = useState(0);
  const increaseLike = () => {
    setLikes(likes + 1);
  };
  return (
    <div className="App">
      <div>{likes}</div>
      <button onClick={increaseLike}>Like! 👍</button>
    </div>
  );
}

export default LikesApp;
