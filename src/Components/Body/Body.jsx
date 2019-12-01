import React from 'react';
import './Body.scss';
import HomePage from '../HomePage/HomePage';
import ContactPage from '../ContactPage/ContactPage';

function Body(props) {
  const { blogList, blogImage, selectedPage } = props;
  let bodyContent = (<div>empty</div>);
  if (selectedPage === 'home') {
    bodyContent = <HomePage blogList={blogList} blogImage={blogImage} />;
  } else {
    bodyContent = (<ContactPage />);
  }
  return (bodyContent);
}

Body.protoTypes = {
};

export default Body;
