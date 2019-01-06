import React, { Component } from 'react'

//TODO(7): This connects the component to the redux store
import { connect } from 'react-redux';
//TODO(8): Bring actions here
import { fetchPosts } from '../actions/postAction';

class Post extends Component {

  componentWillMount() {
    this.props.fetchPosts();
  }

  render() { console.log(this.props);
    const postItems = this.props.posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ))
    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    )
  }
}

//TODO(7.1.1): Map redux state to component props
const mapStateToProps = state => ({
  posts: state.posts.items
})

//TODO(7.1): export using connect object
//connect first param - maps state to props & second one is the Action
export default connect(mapStateToProps, { fetchPosts })(Post);
