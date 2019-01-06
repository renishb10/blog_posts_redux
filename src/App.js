import React, { Component } from 'react';
import './App.css';

//Import Components here
import Post from './components/Post';
import PostForm from './components/PostForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Blog Post Redux Example</h2>
        </header>
        <PostForm />
        <hr />
        <Post />
      </div>
    );
  }
}

export default App;
