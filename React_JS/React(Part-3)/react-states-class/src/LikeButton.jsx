import { useState } from "react";
export default function LikeButton() {
  let [isLiked, setIsLiked] = useState(false);
  let [likeCount, setLikeCount] = useState(0);

  function toggleLike() {
    setIsLiked(!isLiked);
    setLikeCount(likeCount + 1);
  }

  let styleLike = { color: "red" };
  return (
    <div>
      <p onClick={toggleLike}>
        {likeCount} Likes &nbsp; &nbsp; &nbsp;
        {isLiked ? (
          <i className="fa-solid fa-heart" style={styleLike}></i>
        ) : (
          <i className="fa-regular fa-heart"></i>
        )}
      </p>
    </div>
  );
}
