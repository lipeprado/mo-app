import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Col } from "antd";

// Styles
import styles from "./styles.module.scss";

const Post = ({ post }) => {
  const { title, body } = post;
  return (
    <Col xs={24} sm={12} md={12} lg={12} span={12}>
      <Link className={styles.post} to={`/posts/${post.id}`}>
        <h1 className={styles.post__title}>{title}</h1>
        <p className={styles.post__body}>{body.substring(0, 100)}</p>
      </Link>
    </Col>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired
};

export default Post;
