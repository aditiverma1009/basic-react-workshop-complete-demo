import React from 'react';
import PropTypes from 'prop-types';
import './BlogCard.scss';

function BlogCard({ details }) {
  const {
    title, imageAlt,
    imageUrl, content,
  } = details;
  return (
    <div className="blogCard">
      <div>{title}</div>
      <img src={imageUrl} alt={imageAlt} />
      <div>{content}</div>
    </div>
  );
}

BlogCard.propTypes = {
  details: PropTypes.shape({
    title: PropTypes.string,
    imageAlt: PropTypes.string,
    imageUrl: PropTypes.string,
    content: PropTypes.string,
  }),
};

BlogCard.defaultProps = {
  details: PropTypes.shape({
    title: '',
    imageAlt: '',
    imageUrl: '',
    content: '',
  }),
};

export default BlogCard;
