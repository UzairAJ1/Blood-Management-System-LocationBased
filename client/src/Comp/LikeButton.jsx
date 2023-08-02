import React, { useState } from 'react';

const LikeButton = () => {
    const [likes, setLikes] = useState(0);

  return (
    <>
   

     <i class="fa fa-thumbs-up" aria-hidden="true"onClick={() => setLikes(likes + 1)}>
     {likes} Likes
     </i>
     </>
  )
}

export default LikeButton