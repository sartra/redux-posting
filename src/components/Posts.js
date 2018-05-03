import React, { Component } from 'react'
import { connect } from 'react-redux'; 
import { fetchPosts } from '../actions/postActions';
import PropTypes from 'prop-types';

class Posts extends Component {

  componentWillMount() {
    this.props.fetchPosts();
  }

  //when component receives a new prop from state this will run 
  componentWillReceiveProps(nextProps){
    if(nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  };
  
  render() {
    const postItems = this.props.posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));
    return (
      <div>
        <h1>Posts</h1>
        { postItems }
      </div>
    )
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired, 
  posts: PropTypes.array.isREquired,
  newPost: PropTypes.object
};

// map state to props = get state from redux and map it to props of the component 
// staet.post is the reducer 
const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
});

export default connect(mapStateToProps, { fetchPosts })( Posts);