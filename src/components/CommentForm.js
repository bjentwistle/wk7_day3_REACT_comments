// src/components/CommentForm.js

import React, { useState } from "react";

const CommentForm = ({onCommentSubmit}) => {

  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");

  const handleAuthorChange = (evt) => {
    //looking for input changes typed
    setAuthor(evt.target.value);
  };

  const handleTextChange = (evt) => {
    //looking for input changes typed
    setText(evt.target.value);
  };

  const handleFormSubmit = (evt) => {
    //looking for valid inputs when submit clicked (no empty fields)
    evt.preventDefault();
    const authorToSubmit = author.trim();
    const textToSubmit = text.trim();
    if (!authorToSubmit || !textToSubmit) {
      return;
    }
  
    onCommentSubmit({
      author: authorToSubmit,
      text: textToSubmit,
    });

    setAuthor("");
    setText("");
  };

return (
  <form className="comment-form" onSubmit={handleFormSubmit}>
        <input type="text" placeholder="Your name" value={author} onChange={handleAuthorChange}/>
        <input type="text" placeholder="Say something..." value={text} onChange={handleTextChange}/>
        <input type="submit" value="Post" />
    </form>
    );
};


export default CommentForm;
