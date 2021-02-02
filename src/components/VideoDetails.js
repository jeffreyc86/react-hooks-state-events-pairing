import React, {useState} from "react"


function VideoDetails({title, views, createdAt, upvotes, downvotes}) {
    const [likes, setLikes] = useState(upvotes)
    const [dislikes, setDislikes] = useState(downvotes)
    

    const handleClick = (e) => {
        if (e.target.name === "like-button") {
            setLikes(likes => likes + 1)
        } else if (e.target.name === "dislike-button") {
            setDislikes(dislikes => dislikes + 1)
        } 
    } 
    
    return (
    <div>
        <h1>{title}</h1>
        <p>{views} Views | Uploaded {createdAt}</p>
        <button onClick={handleClick} name="like-button">{likes} 👍</button>
        <button onClick={handleClick} name="dislike-button">{dislikes} 👎</button>
    </div>
    )

}

export default VideoDetails;