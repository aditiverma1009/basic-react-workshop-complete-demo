import React, { Component } from 'react';
import blogImage from '../../assets/rectangle.png';
import BlogCard from '../BlogCard/BlogCard';
import HomePage from '../HomePage/HomePage';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allBlogs: [],
    };
  }

  componentWillMount = () => { // deprecated
    console.log('component will mount');
  };

  componentDidMount = () => {
    console.log('component did mount');
  };

  componentWillReceiveProps=() => { // deprecated
    console.log('component will receive props');
  }

  shouldComponentUpdate=(nextProps, nextStates) => {
    console.log('should Component Update');
    return true;
  }

  componentWillUpdate=() => { // deprecated
    console.log('component will update');
  }

  componentDidUpdate=(prevProps, prevState) => {
    console.log('component did update', prevProps, prevState, this.state);
  }

  componentWillUnmount=() => {
    console.log('component will unmount');
  }

  onFormSubmit = (event, content) => {
    const { title, desc, imageurl } = content;
    const { allBlogs } = this.state;
    event.preventDefault();
    this.setState({
      allBlogs: [
        ...allBlogs,
        {
          title,
          imageUrl: imageurl,
          imageAlt: title,
          content: desc,
        },
      ],
    });
  };

  deleteBlog = (id) => {
    const { allBlogs } = this.state;
    const formattedBlog = allBlogs.filter((item, index) => (index !== id));
    this.setState({
      allBlogs: formattedBlog,
    });
  };

  render() {
    const { allBlogs } = this.state;
    const blogList = allBlogs.map((eachBlog, index) => (
      <BlogCard
        details={eachBlog}
        id={index}
        deleteBlog={(id) => this.deleteBlog(id)}
      />
    ));
    return (
      <div className="app">
        <HomePage
          onFormSubmit={(event, content) => this.onFormSubmit(event, content)}
          blogList={blogList}
          blogImage={blogImage}
        />
      </div>
    );
  }
}

export default App;
