import React from 'react';
import PropTypes from 'prop-types';
import defaultBlogImage from '../../assets/rectangle.png';
import './BlogCard.scss';

function BlogCard(props) {
  const { details, id, deleteBlog } = props;
  const {
    title, imageAlt,
    imageUrl, content,
  } = details;
  console.log('hi', defaultBlogImage);
  return (
    <div className="blogCard">
      <div>{title}</div>
      <img src={imageUrl || defaultBlogImage} alt={imageAlt} />
      <div>{content}</div>
      <input type="button" onClick={() => deleteBlog(id)} value="Delete" />
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
  id: PropTypes.number.isRequired,
  deleteBlog: PropTypes.func.isRequired,
};

BlogCard.defaultProps = {
  details: {
    title: '',
    imageAlt: '',
    imageUrl: '',
    content: '',
  },
};

export default BlogCard;
