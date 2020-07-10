import React, { useState, useEffect } from "react";
import styles from "./Post.module.css";
import { Link, Route } from "react-router-dom";
import { getPostById } from "../../services/postService";

// const somePost = {
//   id: 1,
//   title: "React best practices",
//   description:
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente reiciendis expedita officiis quia omnis. Aspernatur hic nisi debitis. Aliquid, quod.",
//   date: new Date().toString().split(" ").slice(1, 5).join(" "),
// };
const Post = (props) => {
  const [post, setPost] = useState();

  useEffect(async () => {
    const post = await getPostById(props.match.params.id);
    setPost(post);
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.titleWrapper}>
          <h1 className={styles.title}>{post.title}</h1>
          <h5>{post.date}</h5>
        </div>
        <h2 className={styles.desc}>{post.description}</h2>
        <Link to="/">
          <h3 className={styles.goBack}>Back to home</h3>
        </Link>
      </div>
    </div>
  );
};

export default Post;
