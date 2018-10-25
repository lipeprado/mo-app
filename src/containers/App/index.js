import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

// Styles
import styles from "./app.module.scss";

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <Switch>
          <Route path="/" exact component={() => <h1>This is my MO-APP </h1>} />
          <Route path="/posts" exact component={() => <h1>Posts </h1>} />
          <Route path="/posts/:id" component={() => <h1>Post ID</h1>} />
          <Route component={() => <h1>Not Found</h1>} />
        </Switch>
      </div>
    );
  }
}

export default App;
