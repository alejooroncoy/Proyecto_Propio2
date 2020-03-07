import React from 'react';
import '../assets/styles/components/footer.scss'
const Footer = () =>  (
    <footer className="page-footer black">
        <div className="row">
            <div className="col l6 s12">
                <h5 className="letter">
                    Gracias por visitarnos! 
                </h5>
                <p className="letter">
                    Si nuestro trabajo fue de su agrado! No dude en enviarnos un mensaje en nuestras principales fan-pages!
                </p>
            </div>
            <div className="col l4 offset-l2 s12">
                <h5 className="letter">
                    Nuestras Fan-Pages
                </h5>
                <ul className="cer letter">
                    <li><a className="letter" href="https://facebook.com">Facebook</a></li>
                    <li><a className="letter" href="https://instagram.com">Instagram</a></li>
                    <li><a href="https://github.com/alejooroncoy"></a>GitHub</li>
                </ul>
            </div>
        </div>
            <div className="footer-copyright">
                <span className="letter left-footer" href="#">© 2020 Cervecería wilmer</span>
                <a className="letter right-footer" href="#">Actualizandonos a esta nueva era!</a>
          </div>
    </footer>
);

export default Footer;