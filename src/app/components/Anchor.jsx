import React, { PropTypes } from 'react';

const Anchor = ({ path, onClick, children, linkClass }) => (
  <a
    href={path}
    onClick={event => onClick(event)}
    className={linkClass}
  >
    {children}
  </a>
);

Anchor.propTypes = {
  path: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  linkClass: PropTypes.string
};

Anchor.defaultProps = {
  path: '',
  linkClass: ''
};

export default Anchor;