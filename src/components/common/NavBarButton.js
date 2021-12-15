import React from "react";
import PropTypes from "prop-types";

const NavBarButton = ({ className, title, linkTo, border }) => {
  return (
    <li
      className={`inline-block text-geraldine-600 hover:text-geraldine-400 ${className}`}
    >
      <a
        className={`p-3 ${
          border
            ? "border-2 rounded border-geraldine-500 hover:bg-opacity-20 hover:bg-geraldine-400"
            : ""
        }`}
        href={`${linkTo}`}
      >
        {title}
      </a>
    </li>
  );
};

NavBarButton.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  linkTo: PropTypes.string,
  border: PropTypes.bool,
};
NavBarButton.defaultProps = {
  border: false,
};
export default NavBarButton;
