import React from "react";
import PropTypes from "prop-types";
import { css } from "react-emotion";
// Another way to import
import ClipLoading from "react-spinners/BarLoader";

import styles from "./styles.module.scss";

const Loading = ({ loading, message }) => {
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  return (
    <div className={styles.postWrapper}>
      <div className={styles.postWrapper__onLoading}>
        <h1>{message}</h1>
        <ClipLoading
          className={override}
          sizeUnit={"px"}
          size={10}
          color={"#94a5d5"}
          loading={loading}
        />
      </div>
    </div>
  );
};

Loading.propTypes = {
  loading: PropTypes.bool,
  message: PropTypes.string
};

export default Loading;
