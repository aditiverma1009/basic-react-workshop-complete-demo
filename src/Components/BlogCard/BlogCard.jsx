import React from 'react';
import PropTypes from 'prop-types';
import './BlogCard.scss';

function BlogCard({ details }) {
  const {
    title, desc, date, imageAlt,
    imageUrl, introText, content,
  } = details;
  return (
    <div className="blogCard">
      <div>{title}</div>
      <div>{`${desc} ${date}`}</div>
      <img src={imageUrl} alt={imageAlt} />
      <div>{introText}</div>
      <div>{content}</div>
    </div>
  );
}

BlogCard.protoTypes = {
  details: PropTypes.any.isRequired,
};

export default BlogCard;
