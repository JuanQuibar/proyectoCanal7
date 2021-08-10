import React from 'react';
import Isologo from '../img/Isologo.svg';

const Footer = () => {
    return (
        <div className="container">
            <div className="container fluid">
                <div className="column">
                    <div className="footer">
                        <h5 className="text-white">© Grupo América 2021 </h5>
                        <img className="logo_footer" src= {Isologo} alt="" width="60" height="49"/>
                        <h3><a href="b" className="nav-link disabled"><i className="fab fa-twitter"></i></a></h3>
                        <h3><a href="b" className="nav-link disabled"><i className="fab fa-instagram"></i></a></h3>
                        <h3><a href="b" className="nav-link disabled"><i className="fab fa-facebook"></i></a></h3>
                    </div>
                        <div className="texto_footer small">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem reprehenderit ratione quia aliquam ab corporis, in nostrum molestiae, sit ipsam debitis culpa, consequatur enim harum illo omnis architecto ducimus sequi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem reprehenderit ratione quia aliquam ab corporis, in nostrum molestiae, sit ipsam debitis culpa, consequatur enim harum illo omnis architecto ducimus sequi!
                        </div>

                    
                </div>
            </div>
        </div>
      );

}
 
export default Footer;