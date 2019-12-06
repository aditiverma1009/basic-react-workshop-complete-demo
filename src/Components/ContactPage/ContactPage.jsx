import React from 'react';
import './ContactPage.scss';

class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      details: {
        socialMediaProfiles: [],
      },
    };
  }

  componentDidMount = async () => {
    const response = await fetch('https://api.myjson.com/bins/1463g4');
    const res = await response.json();
    this.setState({
      details: res.response.data,
    });
  }


  render() {
    const { details } = this.state;
    const socialMediaList = details.socialMediaProfiles.map((eachPlatform) => (
      <div className="platform">
        <a href={eachPlatform.link}>
          <img
            src={eachPlatform.icon}
            alt={eachPlatform.platform}
          />
          <p>{eachPlatform.platform}</p>
        </a>
      </div>
    ));
    return (
      <div className="contact-page">
        <div className="blog-name">
          <img src={details.image} alt="aditi" />
          <p className="title">{details.name}</p>
          <p className="subTitle">{details.profile}</p>
          <p className="subTitle">
            {`@${details.company}`}
          </p>
        </div>
        <div className="contact-info">
          <div className="follow-me">
            {socialMediaList}
          </div>
        </div>
      </div>
    );
  }
}

export default ContactPage;
