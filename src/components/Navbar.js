import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = ({ title, icon }) => {
  // const {title , icon} = props;

  //in classbase component
  // static defaultProps = {
  //     title : 'Github Search' ,
  //     icon : 'fa fa-github mr-05'
  // }
  //in classbase component
  // static propTypes ={
  //     title : PropTypes.string.isRequired,
  //     icon : PropTypes.string.isRequired
  // }

  return (
    <div className="navbar bg-primary">
      {/* <h1>
                    <i className={props.icon}></i>
                    {props.title}
                </h1> */}
      <h1>
        <i className={icon}></i>
        {title}
      </h1>
      <ul>
        <li>
          <Link to="/github-users">Home</Link>
        </li>
        <li>
          <Link to="/github-users/about">About</Link>
        </li>
      </ul>
    </div>
  );
};

Navbar.defaultProps = {
  title: "Github Search",
  icon: "fa fa-github mr-05",
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
