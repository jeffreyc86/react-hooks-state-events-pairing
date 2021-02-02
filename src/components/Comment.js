import React, {useState}  from "react";

function Comment({user, comment}){

    const [likes, setLikes] = useState(0)
    const [dislikes, setDislikes] = useState(0)

    const handleClick = (e) => {
        if (e.target.name === "like-button") {
            setLikes(likes => likes + 1)
        } else if (e.target.name === "dislike-button") {
            setDislikes(dislikes => dislikes + 1)
        } 
    } 

    return(
        <div>
            <h4>{user}</h4>
            <p>{comment}</p>
            <button onClick={handleClick} name="like-button">{likes} 👍</button>
            <button onClick={handleClick} name="dislike-button">{dislikes} 👎</button>
        </div>
    )
}

export default Comment;