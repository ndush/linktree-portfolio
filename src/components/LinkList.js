import React from 'react';
import { ListGroup, Image } from 'react-bootstrap';
import LinkButton from './LinkButton';

const LinkList = () => {
  const links = [
    'https://www.linkedin.com/in/damaris-nduku-10104424/',
    'https://github.com/ndush',
  ];

  return (
    <ListGroup>
      <div className="mx-lg-5 mr-3 ml-3 d-flex flex-column align-items-center">
        <Image
          alt="logo"
          width="120"
          height="150"
          src={process.env.PUBLIC_URL + 'a.png'}
          className="mb-4"
          rounded
        />
        <h5 className="mb-4 text-white">@paras.adhikary</h5>
        {links.map((link) => (
          <LinkButton key={link} link={link} />
        ))}
      </div>
    </ListGroup>
  );
};

export default LinkList;