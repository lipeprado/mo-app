import React, { Component } from "react";
import PropTypes from "prop-types";
import { Row, Col } from "antd";
// Component
import Post from "./Post";
import Loading from "../../components/Loading";

// Styles
import styles from "./styles.module.scss";

class List extends Component {
  state = {
    loading: false
  };

  render() {
    const { posts, onLoadMore, isFetching } = this.props;
    return (
      <div className={styles.wrapper}>
        {isFetching ? (
          <div className={styles.postWrapper}>
            <div className={styles.postWrapper__onLoading}>
              <h1>Loading Posts...</h1>
              <Loading loading={isFetching} />
            </div>
          </div>
        ) : (
          <div className={styles.wrapperPosts}>
            <div onClick={onLoadMore} className={styles.wrapperPosts__loadMore}>
              Load more posts
            </div>
            <Row gutter={16}>
              {posts.map(post => {
                return (
                  <Col xs={24} sm={12} md={12} lg={12} span={12}>
                    <Post key={post.id} post={post} />
                  </Col>
                );
              })}
            </Row>
          </div>
        )}
      </div>
    );
  }
}

List.propTypes = {
  posts: PropTypes.array.isRequired,
  onLoadMore: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired
};

export default List;
