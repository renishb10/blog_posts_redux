import React, { Component } from 'react';
import './App.css';

//Redux setup
//TODO(1): Bring 'Provider' here - its a glue for bringing redux and react together
import { Provider } from 'react-redux';

//Import Components here
import Post from './components/Post';
import PostForm from './components/PostForm';

//TODO(2): Bring the store here (refer store.js)
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <h2>Blog Post Redux Example</h2>
          </header>
          <PostForm />
          <hr />
          <Post />
        </div>
      </Provider>
    );
  }
}

export default App;
