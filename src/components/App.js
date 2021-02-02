import video from "../data/video.js";
import React, {useState} from "react"
import VideoDetails from "./VideoDetails"
import CommentList from "./CommentList"
import userEvent from "@testing-library/user-event";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App" >
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameborder="0"
        allowfullscreen
        title="Thinking in React"
      />
      <VideoDetails 
        title={video.title}
        views={video.views}
        createdAt={video.createdAt}
        upvotes={video.upvotes}
        downvotes={video.downvotes}
        />
        <br></br>
        <CommentList 
          comments={video.comments}
          />
    </div>
  );
}

export default App;
