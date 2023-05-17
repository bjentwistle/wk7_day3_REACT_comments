// src/containers/CommentBox.js

import CommentList from "../components/CommentList";
import React, { useState } from "react";

const CommentBox = () => {
    const [comments, setComments] = useState(	
        [
            {
                id: 1,
                author: "Rick Astley",
                text: "Never gonna give you up!"
            },
            {
                id: 2,
                author: "Valerie Gibson",
                text: "I'm dreaming in React..."
            }
        ]
    )

    return (
        <>
            <h2>Comments Box here</h2>
            <CommentList comments={comments} /> 
        </>
    );

}

export default CommentBox;