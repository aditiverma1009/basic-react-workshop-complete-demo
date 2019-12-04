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

  componentDidMount = () => {
    fetch('https://content.guardianapis.com/search?api-key=616fd154-e75f-479b-82c8-80e78ad4b6be')
      .then((response) => response.json())
      .then((data) => (data.response.results))
      .then((results) => {
        this.setState({
          allBlogs: results,
        });
      });
  };

  render() {
    const { allBlogs } = this.state;
    const formattedBlog = allBlogs.map((blog) => ({
      title: blog.webTitle,
      desc: blog.pillarName,
      date: blog.webPublicationDate,
      imageUrl: blogImage,
      imageAtl: blog.sectionName,
      introText: blog.type,
      content: blog.webTitle,
    }));
    // const allBlogs = [{
    //   title: 'Title Heading',
    //   desc: 'Description',
    //   date: new Date('10-09-1996').getFullYear(),
    //   imageUrl: blogImage,
    //   imageAlt: 'Blog Title',
    //   introText: 'Blog Introduction',
    //   content: 'Content of the blog',
    // }, {
    //   title: 'Title Heading',
    //   desc: 'Description',
    //   date: new Date('10-09-1990').getFullYear(),
    //   imageUrl: blogImage,
    //   imageAlt: 'Blog Title',
    //   introText: 'Blog Introduction',
    //   content: 'Content of the blog',
    // }, {
    //   title: 'Title Heading',
    //   desc: 'Description',
    //   date: new Date('10-09-1996').getFullYear(),
    //   imageUrl: blogImage,
    //   imageAlt: 'Blog Title',
    //   introText: 'Blog Introduction',
    //   content: 'Content of the blog',
    // }, {
    //   title: 'Title Heading',
    //   desc: 'Description',
    //   date: new Date('10-09-1990').getFullYear(),
    //   imageUrl: blogImage,
    //   imageAlt: 'Blog Title',
    //   introText: 'Blog Introduction',
    //   content: 'Content of the blog',
    // }];

    console.log(formattedBlog);
    const blogList = formattedBlog.map((eachBlog) => (<BlogCard details={eachBlog} />));
    return (
      <div className="app">
        <HomePage blogList={blogList} blogImage={blogImage} />
      </div>
    );
  }
}

export default App;
