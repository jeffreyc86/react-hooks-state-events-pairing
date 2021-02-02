import React, {useState} from "react"
import Comment from "./Comment"

function CommentList ({comments}) {

    const [hidden, setHidden] = useState(false)
    const [input, setInput] = useState("")
    const [commentsArray, setCommentsArray] = useState(comments)
    
    
    const handleClick = (e) => {
        const commentsSection = document.querySelector(".comments-section")
        if (hidden === false) {
            setHidden(!hidden)
            e.target.innerText = "Show Comments"
            commentsSection.style.display = "none"
        } else {
            setHidden(!hidden)
            e.target.innerText = "Hide Comments"
            commentsSection.style.display = "block"
        }
    }

    const filteredComments = commentsArray.filter(comment => {
        return comment.user.toLowerCase().includes(input.toLowerCase())
    })

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const removeComment = (id) => {
        const newArr = [...comments].filter(comment => {
            return comment.id != id
        })
        setCommentsArray(newArr)
    }

    const commentslist = filteredComments.map (comment =>
        <React.Fragment>
        <Comment
        key={comment.id} 
        user={comment.user} 
        comment={comment.comment} 
        /> 
        <button onClick={() => removeComment(comment.id)}>Remove</button>
        </React.Fragment>
    )

    const sortByName = () => {
        let newArray = [...commentsArray]
        newArray.sort((a,b) => (a.user > b.user) ? 1 : ((b.user > a.user) ? -1 : 0))
        setCommentsArray(newArray)
    }
        
        return (
            <div>
                <button onClick={handleClick} name="hide-comments">Hide Comments</button>
                <br></br>
                <br></br>
                <input type="text" placeholder="filter by user" onChange={handleChange} />
                <br></br>
                <br></br>
                <button onClick={sortByName}>Sort By Name</button>
                <div className="comments-section">
                    <h2>Displaying {filteredComments.length} of {commentsArray.length} Comments</h2>
                    <ul>
                        {commentslist}
                    </ul>
                </div>
            </div>
        )
}

    export default CommentList;