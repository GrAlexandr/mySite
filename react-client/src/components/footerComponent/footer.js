import React, { Component } from 'react';
import FaGoogle from 'react-icons/lib/fa/google-plus-square';
import FaFacebook from 'react-icons/lib/fa/facebook-square';
import FaGit from 'react-icons/lib/fa/github-square';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <a href="#">
          <FaGoogle />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100012792163522">
          <FaFacebook />
        </a>
        <a href="https://github.com/GrAlexandr">
          <FaGit />
        </a>
      </footer>
    )
  }
}

export default Footer;