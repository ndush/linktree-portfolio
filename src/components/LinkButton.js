import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Icon } from '@iconify/react';

import linkedinIcon from '@iconify/icons-simple-icons/linkedin';
import githubIcon from '@iconify/icons-simple-icons/github';


import './WidthLimit.scss';

const LinkButton = (props) => {
  const [icon, setIcon] = useState('');
  useEffect(() => {
    if (props.link.includes('youtube')) {
      setIcon(<Icon icon={githubIcon} />);
    } else if (props.link.includes('instagram')) {
      setIcon(<Icon icon={linkedinIcon} />);
    } 
  }, [props]);

  return (
    <Button
      variant="outline-light"
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