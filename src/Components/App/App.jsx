import React, { Component } from 'react';
import blogImage from '../../assets/rectangle.png';
import BlogCard from '../BlogCard/BlogCard';
import Header from '../Header/Header';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPage: 'home',
    };
  }

  handleChangeTab = (value) => {
    if (value === 'contact') {
      this.setState({
        selectedPage: 'contact',
      });
    } else {
      this.setState({
        selectedPage: 'home',
      });
    }
  }

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

    const { selectedPage } = this.state;
    const blogList = allBlogs.map((eachBlog) => (<BlogCard details={eachBlog} />));
    return (
      <div className="app">
        <Header selectedPage={selectedPage} handleChangeTab={(value) => this.handleChangeTab(value)} />
        <Body blogList={blogList} blogImage={blogImage} selectedPage={selectedPage} />
        <Footer />
      </div>
    );
  }
}

export default App;
