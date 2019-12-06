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
