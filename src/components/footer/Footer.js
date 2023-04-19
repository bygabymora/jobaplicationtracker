import React from 'react';
import { FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi'
import './footer.css'

const Footer = () => {
  const space = <>&nbsp;&nbsp;</>;
  return (
    
      
        <div className="footer__social" id='footer'>
          <a href="https://www.linkedin.com/in/bygabymora/" className="footer__social-link" target="_blank">
          <FiLinkedin/>
          </a>
          {space}
          <a href="https://github.com/bygabymora" className="footer__social-link" target="_blank">
          <FiGithub/>
          </a>
          {space}
          <a href="https://www.instagram.com/bygabymora/" className="footer__social-link" target="_blank">
          <FiInstagram/>
          </a>
          <p className='footer__copy ' >&#169; ByGabyMora {space}{space}</p>
        </div>
      
  
    
  )
}

export default Footer