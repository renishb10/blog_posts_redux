import React, { Component } from 'react'

class Post extends Component {

  componentWillMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>Posts</h1>
      </div>
    )
  }
}

export default Post;
