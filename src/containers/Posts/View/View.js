import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

// Actions
import { fetchPostById, fetchCommentsByPostId } from "../../../actions/posts";

// Components
import Loading from "../../../components/Loading";

// Styles
import styles from "./styles.module.scss";

class View extends Component {
  componentWillMount = () => {
    const { fetchPostById, fetchCommentsByPostId, match } = this.props;
    fetchPostById(match.params.id);
    fetchCommentsByPostId(match.params.id);
  };

  render() {
    const { currentPost, isFetchingById, match, comments } = this.props;
    return (
      <div style={{ width: "100%" }}>
        {isFetchingById ? (
          <div className={styles.viewWrapper}>
            <Loading
              message={`Post with ID ${match.params.id} is Loading...`}
              loading={true}
            />
          </div>
        ) : (
          <div>
            <Link to="/posts" className={styles.backHome}>
              Back
            </Link>
            <div className={styles.wrapperViewPost}>
              <h4 className={styles.wrapperViewPost__title}>
                {currentPost.title}
              </h4>
              <p className={styles.wrapperViewPost__body}>{currentPost.body}</p>
            </div>
            <div>
              <h1 className={styles.mainTitle}>Latest Comments</h1>
              {comments.map(comment => {
                return (
                  <div key={comment.id} className={styles.wrapperComments}>
                    <span className={styles.wrapperComments__email}>
                      {comment.email} says:
                    </span>
                    <h4 className={styles.wrapperComments__name}>
                      {comment.name}
                    </h4>
                    <p className={styles.wrapperComments__body}>
                      {comment.body}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  }
}

View.propTypes = {
  fetchPostById: PropTypes.func,
  fetchCommentsByPostId: PropTypes.func,
  currentPost: PropTypes.object,
  isFetchingById: PropTypes.bool,
  comments: PropTypes.array.isRequired
};

const mapStateToProps = state => {
  return {
    currentPost: state.posts.currentPost,
    isFetchingById: state.posts.isFetchingById,
    comments: state.posts.comments
  };
};
export default connect(
  mapStateToProps,
  { fetchPostById, fetchCommentsByPostId }
)(View);
