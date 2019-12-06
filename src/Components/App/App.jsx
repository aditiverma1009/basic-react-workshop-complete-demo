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

  render() {
    const { allBlogs } = this.state;
    const blogList = allBlogs.map((eachBlog) => (<BlogCard details={eachBlog} />));
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
