import React from 'react'
import '../Nav.css';
import web5 from '../images/logo-1.jpg';
import { Link}from "react-router-dom";
export const Footer = () => {
    return (
        <div className="container-fluid  ">
            <div className="row">
                <div className="col-12 mx-auto counters container-fluid ">
                    <div className="row">
                        <div className="card mb-3 col-12" style={{ backgroundColor: "#fff" }} >
                            <div className="row g-0">
                                <div className="col-4 container-fluid mx-auto ">
                                    <img src={web5} alt="..." className="col-10 img-foot"></img>
                                </div>

                                <div className="col-md-8">
                                    <div className="card-body">
                                        <div className="footer-head">
                                            <ul className="foot-inside">
                                                <li className="foot-heading">Deals In </li>
                                               <Link to="/kitchen"><li>Kitchen Ware</li></Link>
                                               <Link  to="bathroom"><li>Bathroom Ware</li></Link>  
                                                 <Link to ="decor"><li>Decoratives </li></Link>
                                            </ul>
                                            <ul className="foot-inside">
                                                <li className="foot-heading">Useful Links </li>
                                                <Link to="/"> <li>Home </li></Link>
                                                <Link to="/about"><li>About us</li> </Link>
                                                <a href="https://wa.me/918171975050" target="blank"><li>Connect via Whatsapp </li> </a>
                                            </ul>

                                            <ul className="foot-inside">
                                                <li className="foot-heading">Follow Us </li>
                                                <a href="https://www.facebook.com/Art-Craft-110633641286859/" target="_blank"><li>Facebook</li></a>
                                                <a href="https://www.instagram.com/artc.raft123/" target="_blank"><li>Instagram</li></a>
                                                <a href="https://twitter.com/ARTCRAF09993930" target="blank"> <li>Twitter</li> </a>
                                            </ul>
                                            <ul className="foot-inside">
                                                <li className="foot-heading">Connect With Us</li>
                                               <Link to="/contact"><li>Contact Us</li></Link>
                                               <Link to ="/contact"> <li>Careers</li></Link>
                                            </ul>

                                        </div>

                                    </div>
                                </div>


                            </div>

                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}