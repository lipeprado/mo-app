import React from "react";
import PropTypes from "prop-types";
import { css } from "react-emotion";
// Another way to import
import ClipLoading from "react-spinners/BarLoader";

import styles from "./styles.module.scss";

const Loading = ({ loading }) => {
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  return (
    <div className={styles.wrapperLoading}>
      <ClipLoading
        className={override}
        sizeUnit={"px"}
        size={10}
        color={"#94a5d5"}
        loading={loading}
      />
    </div>
  );
};

Loading.propTypes = {
  loading: PropTypes.bool
};

export default Loading;
