import React from 'react';
import './footer.css';



const Footer = () => {
    return (
        <div>
            <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-4">
                        <div className="widget1">
                            <div className="logo">
                                <img src="https://www.openplay.co.uk/assets/images/logo.png" className="img-fluid" alt=""/>
                            </div>
                            <p>
                                In eu libero ligula. Fusce eget metus lorem, ac viverra
                                leo. Nullam convallis, arcu vel pellentesque sodales,
                                nisi est varius diam, ac ultrices sem ante quis sem.
                                Proin ultricies volutpat sapien.
                            </p>
                            <div className="socialLinks">
                                <ul>
                                    <li>
                                        <a href="www.aaa.com">
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="www.aaa.com">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="www.aaa.com">
                                            <i className="fab fa-linkedin-in"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="www.aaa.com">
                                            <i className="fab fa-google-plus-g"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="widget2">
                            <h5>
                                Latest News
                            </h5>
                            <div className="media">
                                <img className="img-fluid" src="https://www.vdl.lu/sites/default/files/styles/max_width_1400/public/media/image/2017-07/SPO_foot_stade_camille_polfer.JPG?itok=qA6F0cQ7" alt=""/>
                                <div className="media-body d-flex align-self-center">
                                    <div className="content">
                                        <a href="www.aaa.com">
                                            <p>
                                                    Did son unreserved themselves indulgence its
                                            </p>
                                        </a>
                                        <span>
                                            17 Aôut, 2019
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="media">
                                <img className="img-fluid" src="https://newstourisme.com/wp-content/uploads/2018/02/28364607-D6AA-425B-8EC3-597DA3B351D8-21744-00000B23120CBB27.jpeg" alt=""/>
                                <div className="media-body d-flex align-self-center">
                                    <div className="content">
                                        <a href="www.aaa.com">
                                            <p>
                                                    Rapturous am eagerness it as resolving household
                                            </p>
                                        </a>
                                        <span>
                                            17 Aôut, 2019
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-2">
                        <div className="widget3">
                            <h5>
                                Quick Links
                            </h5>
                            <ul>
                                <li>
                                    <a href="www.aaa.com">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="www.aaa.com">
                                        about
                                    </a>
                                </li>
                                <li>
                                    <a href="www.aaa.com">
                                        contact
                                    </a>
                                </li>
                                <li>
                                    <a href="www.aaa.com">
                                        privecy
                                    </a>
                                </li>
                                <li>
                                    <a href="www.aaa.com">
                                        skills
                                    </a>
                                </li>
                                <li>
                                    <a href="www.aaa.com">
                                        career
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-2">
                        <div className="widget4">
                            <h5>
                                Other Links
                            </h5>
                            <ul>
                                <li>
                                    <a href="www.aaa.com">
                                        themeforest
                                    </a>
                                </li>
                                <li>
                                    <a href="www.aaa.com">
                                        graphicriver
                                    </a>
                                </li>
                                <li>
                                    <a href="www.aaa.com">
                                        carrier
                                    </a>
                                </li>
                                <li>
                                    <a href="www.aaa.com">
                                        videolives
                                    </a>
                                </li>
                                <li>
                                    <a href="www.aaa.com">
                                        videos
                                    </a>
                                </li>
                                <li>
                                    <a href="www.aaa.com">
                                        photos
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyRightArea">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <p>&copy; Copyright All rights reserved 2019.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        </div>
    )
}

export default Footer