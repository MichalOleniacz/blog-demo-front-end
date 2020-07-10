import React, { useState, useEffect } from "react";
import styles from "./Posts.module.css";
import { Link } from "react-router-dom";
import { getPosts } from "../../services/postService";

const someData = [
  {
    id: 1,
    title: "React best practices",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente reiciendis expedita officiis quia omnis. Aspernatur hic nisi debitis. Aliquid, quod.",
    date: new Date().toString().split(" ").slice(1, 5).join(" "),
  },
  {
    id: 2,
    title: "Design life hacks",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente reiciendis expedita officiis quia omnis. Aspernatur hic nisi debitis. Aliquid, quod.",
    date: new Date().toString().split(" ").slice(1, 5).join(" "),
  },
  {
    id: 3,
    title: "GitHub tricks",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente reiciendis expedita officiis quia omnis. Aspernatur hic nisi debitis. Aliquid, quod.",
    date: new Date().toString().split(" ").slice(1, 5).join(" "),
  },
];

const Posts = () => {
  const [data, setData] = useState();

  useEffect(async () => {
    const posts = await getPosts();
    setData(posts);
    this.history.pushState("/");
  });

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Recent posts:</h1>
      <div className={styles.grid}>
        {data.map((el) => {
          return (
            <Link to={`/${el.id}`}>
              <div className={styles.postWrapper}>
                <h2 className={styles.postTitle}>{el.title}</h2>
                <h3 className={styles.postDesc}>{el.description}</h3>
                <div className={styles.postFooter}>
                  <h4 className={styles.postDate}>{el.date}</h4>
                  <h5 className={styles.postReadMore}>Read more</h5>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Posts;
