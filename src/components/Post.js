import React, { Component } from 'react'

//TODO(7): This connects the component to the redux store
import { connect } from 'react-redux';
//TODO(8): Bring actions here
import { fetchPosts } from '../actions/postAction';

//TODO(9): Bring in propTypes
import PropTypes from "prop-types";

class Post extends Component {

  componentDidMount() {
    //TODO(8.1): Calling the action here
    this.props.fetchPosts();
  }

  //TODO(11.1): Getting the props when the new post component adds new value
  componentWillReceiveProps(nextProps) {
    if(nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
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

//TODO(9.1): Declare property types here
Post.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
};

//TODO(7.1.1): Map redux state to component props
const mapStateToProps = state => ({
  posts: state.posts.items,
  
  //TODO(11): Now its time to bring new post item to post item list (Single source of state and sharing it to all the components)
  newPost: state.posts.item
})

//TODO(7.1): export using connect object
//connect first param - maps state to props & second one is the Action
export default connect(mapStateToProps, { fetchPosts })(Post);
