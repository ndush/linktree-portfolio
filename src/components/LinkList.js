import React from 'react';
import { ListGroup, Image } from 'react-bootstrap';
import LinkButton from './LinkButton';

const LinkList = () => {
  const links = [
    'https://www.linkedin.com/in/damaris-nduku-10104424/',
    'https://github.com/ndush',
    'https://training.zuri.team/',
    'https://books.zuri.team/,'
  ];

  return (
    <ListGroup>
      <div className="mx-lg-5 mr-3 ml-3 d-flex flex-column align-items-center">
        <Image
          alt="logo"
          width="200"
          height="200"
          src={process.env.PUBLIC_URL + 'a.png'}
          className="mb-4"
          rounded
        />
        <h5 className="mb-4 text-white">@lumie</h5>
        {links.map((link) => (
          <LinkButton key={link} link={link} />
        ))}
      </div>
    </ListGroup>
  );
};

export default LinkList;