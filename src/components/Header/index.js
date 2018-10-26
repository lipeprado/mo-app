import React, { Component } from "react";
import PropTypes from "prop-types";
import { Row, Col } from "antd";

// Styles
import styles from "./styles.module.scss";

class index extends Component {
  render() {
    const { onClick, postsSize } = this.props;

    return (
      <Row type="flex" justify="space-between" className={styles.mainWrapper}>
        <Col xs={12} lg={8} span={8}>
          <h1 className={styles.logo}>Mo-Challenge</h1>
        </Col>

        <Col xs={12} lg={8} span={8}>
          <span className={styles.mainWrapper__tag}>
            {postsSize} Posts Already Fetched
          </span>
        </Col>
        <Col xs={12} lg={8} span={8}>
          <div onClick={onClick} className={styles.mainWrapper__loadMore}>
            Load more posts
          </div>
        </Col>
      </Row>
    );
  }
}

index.propTypes = {
  onClick: PropTypes.func.isRequired,
  postsSize: PropTypes.number
};

export default index;
