import React from "react";
import PropTypes from "prop-types";

// Styles
import styles from "./styles.module.scss";

const Post = ({ post }) => {
  return (
    <div className={styles.post}>
      <h1 className={styles.post__title}>{post.title}</h1>
      <p className={styles.post__body}>{post.body}</p>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired
};

export default Post;
