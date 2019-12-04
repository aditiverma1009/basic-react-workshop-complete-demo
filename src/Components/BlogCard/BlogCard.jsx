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
      <div>{`${desc}`}</div>
      <div>{`${date}`}</div>
      <img src={imageUrl} alt={imageAlt} />
      <div>{introText}</div>
      <div>{content}</div>
    </div>
  );
}

BlogCard.propTypes = {
  details: PropTypes.shape({
    title: PropTypes.string,
    desc: PropTypes.string,
    date: PropTypes.string,
    imageAlt: PropTypes.string,
    imageUrl: PropTypes.string,
    introText: PropTypes.string,
    content: PropTypes.string,
  }),
};

BlogCard.defaultProps = {
  details: PropTypes.shape({
    title: '',
    desc: '',
    date: '',
    imageAlt: '',
    imageUrl: '',
    introText: '',
    content: '',
  }),
};

export default BlogCard;
