import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Icon } from '@iconify/react';

import linkedinIcon from '@iconify/icons-simple-icons/linkedin';
import githubIcon from '@iconify/icons-simple-icons/github';
//  import zuriboksIcon from '@iconify/icons-simple-icons/books';



import './WidthLimit.scss';

const LinkButton = (props) => {
  const [icon, setIcon] = useState('');
  useEffect(() => {
    if (props.link.includes('github')) {
      setIcon(<Icon icon={githubIcon} />);
    } else if (props.link.includes('linkedin')) {
      setIcon(<Icon icon={linkedinIcon} />);
    } 
    // else if (props.link.includes('btn__zuri')) {
    //   setIcon(<Icon icon={zuriteamIcon} />);
    // } 
    // else if (props.link.includes('linkedin')) {
    //   setIcon(<Icon icon={linkedinIcon} />);
    // } 
    // else if (props.link.includes('linkedin')) {
    //   setIcon(<Icon icon={linkedinIcon} />);
    // } 
    // else if (props.link.includes('linkedin')) {
    //   setIcon(<Icon icon={linkedinIcon} />);
    // } 
    // else if (props.link.includes('linkedin')) {
    //   setIcon(<Icon icon={linkedinIcon} />);
    // } 
  }, [props]);

  return (
    <Button
      variant="outline-dark"
      href={props.link}
      className="mb-3 max-button"
      size="lg"
      block
    >
      {icon}
    </Button>
  );
};

export default LinkButton;