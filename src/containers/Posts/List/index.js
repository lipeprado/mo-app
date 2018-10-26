import React from "react";
import PropTypes from "prop-types";
import { Row } from "antd";

// Component
import Post from "../Post/Post";
import Loading from "../../../components/Loading";

// Styles
import styles from "./styles.module.scss";

const List = ({ posts, isFetching }) => {
  return (
    <div className={styles.wrapper}>
      {isFetching ? (
        <Loading message="Fetching Posts..." loading={isFetching} />
      ) : (
        <div className={styles.wrapperPosts}>
          <Row gutter={16}>
            {posts.map((post, i) => {
              return <Post key={i} post={post} />;
            })}
          </Row>
        </div>
      )}
    </div>
  );
};

List.propTypes = {
  posts: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired
};

export default List;
