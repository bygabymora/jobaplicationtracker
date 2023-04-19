import React from 'react';
import { FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi'
import './footer.css'

const Footer = () => {
  return (
    <footer className='footer__container'>
      <div className="footer">
      <div className="footer__social" id='footer'>
        <a href="https://www.linkedin.com/in/bygabymora/" className="footer__social-link" target="_blank">
        <FiLinkedin/>
        </a>
        <a href="https://github.com/bygabymora" className="footer__social-link" target="_blank">
        <FiGithub/>
        </a>
        <a href="https://www.instagram.com/bygabymora/" className="footer__social-link" target="_blank">
        <FiInstagram/>
        </a>
      </div>
      <span className="footer__copy">&#169; ByGabyMora, All rigths reserved</span>
      </div>
    </footer>
  )
}

export default Footer