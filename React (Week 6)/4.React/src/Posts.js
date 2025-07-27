import React from "react";
import Post from "./Post";

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  loadPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ posts: data });
      });
  }

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error, info) {
    alert("Error occurred while rendering the component");
  }

  render() {
    return (
      <div>
        {this.state.posts.length > 0 &&
          this.state.posts.map((post) => (
            <Post key={post.id} title={post.title} body={post.body} />
          ))}
      </div>
    );
  }
}

export default Posts;
