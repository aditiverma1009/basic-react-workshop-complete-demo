import React, { Component } from 'react';
import blogImage from '../../assets/rectangle.png';
import BlogCard from '../BlogCard/BlogCard';
import HomePage from '../HomePage/HomePage';
import './App.scss';

class App extends Component {
  render() {
    const allBlogs = [{
      title: 'Title Heading',
      desc: 'Description',
      date: new Date('10-09-1996').getFullYear(),
      imageUrl: blogImage,
      imageAlt: 'Blog Title',
      introText: 'Blog Introduction',
      content: 'Content of the blog',
    }, {
      title: 'Title Heading',
      desc: 'Description',
      date: new Date('10-09-1990').getFullYear(),
      imageUrl: blogImage,
      imageAlt: 'Blog Title',
      introText: 'Blog Introduction',
      content: 'Content of the blog',
    }, {
      title: 'Title Heading',
      desc: 'Description',
      date: new Date('10-09-1996').getFullYear(),
      imageUrl: blogImage,
      imageAlt: 'Blog Title',
      introText: 'Blog Introduction',
      content: 'Content of the blog',
    }, {
      title: 'Title Heading',
      desc: 'Description',
      date: new Date('10-09-1990').getFullYear(),
      imageUrl: blogImage,
      imageAlt: 'Blog Title',
      introText: 'Blog Introduction',
      content: 'Content of the blog',
    }];

    const blogList = allBlogs.map((eachBlog) => (<BlogCard details={eachBlog} />));
    return (
      <div className="app">
        <HomePage blogList={blogList} blogImage={blogImage} />
      </div>
    );
  }
}

export default App;
