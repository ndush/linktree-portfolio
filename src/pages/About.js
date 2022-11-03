import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import '../components/WidthLimit.scss';

const About = () => {
  const profile = (
    <Image
      alt="logo"
      width="200"
      height="200"
      src={process.env.PUBLIC_URL + 'a.png'}
      className="mb-4"
      rounded
    />
  );

  return (
    <ListGroup>
      <div className="mx-lg-5 mr-3 ml-3 mb-5 d-flex flex-column align-items-center text-center">
        {profile}
        <h4 className="text-white mb-4">
          <strong>About me...</strong>
        </h4>
        <h5 className="text-white mb-5 max-button">
          I am a software developer student at Moringa,Kenya with beginner experience
          in React js and ruby programming
         
        </h5>
        
      </div>
    </ListGroup>
  );
};

export default About;