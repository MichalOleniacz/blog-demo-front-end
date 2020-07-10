import React, { useState, useEffect } from "react";
import Joi from "@hapi/joi";
import styles from "./New.module.css";
import { addPost } from "../../services/postService";

const New = () => {
  const [title, setTitle] = useState("");
  const [story, setStory] = useState("");

  const handleStoryChange = ({ currentTarget: input }) => {
    setStory(input.value);
  };

  const handleTitleChange = ({ currentTarget: input }) => {
    setTitle(input.value);
  };

  const schema = Joi.object({
    title: Joi.string().required().min(4),
    story: Joi.string().required().min(20),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const post = {
      title: title,
      story: story,
      date: new Date().toString().split(" ").slice(1, 5).join(" "),
    };
    const { error } = Joi.valid(post, schema);
    if (error) {
      console.error(error.details[0].message);
      return;
    }
    await addPost(post);
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.form}>
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          placeholder="Title"
          className={styles.title}
        />
        <textarea
          placeholder="Tell us your story..."
          value={story}
          onChange={handleStoryChange}
          className={styles.story}
        />
        <button className={styles.submit} onClick={handleSubmit}>
          Post!
        </button>
      </form>
    </div>
  );
};

export default New;
