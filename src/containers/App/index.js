import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

// Components
import Posts from "../Posts";
import View from "../Posts/View/View";
// Styles
import styles from "./app.module.scss";

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <Switch>
          <Route path="/" exact component={() => <h1>This is my MO-APP </h1>} />
          <Route path="/posts" exact component={Posts} />
          <Route path="/posts/:id" component={View} />
          <Route component={() => <h1>Not Found</h1>} />
        </Switch>
      </div>
    );
  }
}

export default App;
