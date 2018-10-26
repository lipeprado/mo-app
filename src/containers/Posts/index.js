import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";

// Actions
import * as postActions from "../../actions/posts";

// Components
import List from "./List/";
import Header from "../../components/Header";

// Styles
import styles from "./styles.module.scss";

class Posts extends Component {
  state = {
    posts: [],
    currentPage: 0,
    isFetching: false
  };

  componentWillMount = () => {
    const { actions } = this.props;
    actions.fetchPosts();
  };

  _handleLoadMore = async () => {
    const { actions } = this.props;
    const { currentPage } = this.state;
    await actions.fetchPosts(currentPage + 1);
    this.setState({
      currentPage: currentPage + 1
    });
  };

  render() {
    const { isFetching, posts } = this.props;

    return (
      <div className={styles.main}>
        <Header onClick={this._handleLoadMore} postsSize={posts.length} />
        <List isFetching={isFetching} posts={posts} />
      </div>
    );
  }
}

Posts.propTypes = {
  actions: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    posts: state.posts.posts || [],
    isFetching: state.posts.isFetching || false
  };
};
const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(Object.assign({}, postActions), dispatch)
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
