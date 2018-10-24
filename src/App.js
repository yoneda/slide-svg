import React, { Component } from 'react';
import styles from './App.module.css';

console.log(styles);
class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <p>hello! react template</p>
      </div>
    );
  }
}

export default App;
