import { faFacebookF, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import news from '../../images/river.jpg'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Footer = () => {

    const news = useSelector((state) => state.reducer)
    return (
        <div style={{ backgroundColor: 'black' }} className="pt-5 py-2">
            <Container>

                <Row className="text-white">

                    <Col md="4">
                        <h4>
                            EDITOR PICKS</h4>
                    {
                        news.slice(0,2).map(data => {
                            return   <Fragment key={data._id}>
                                <div className="d-flex justify-content-between my-5">
                                <img src={data.image} alt="not found" className="mb-1 w-25" />
                                <div className="ml-5">
                                <Link to={`/newsDetails/${data._id}`}> <h6>{data.title}</h6></Link>
                                  <div className="d-flex justify-content-between">
                                      <small className="country">{data.country}</small>
                                      <small>{ new Date(data.createdAt).toDateString()}</small>
                                  </div>
                                </div>
                            </div>
                            </Fragment>
                            
                        })
                    }
                    </Col>
                    <Col md="4" xs="12">
                        <h4>
                            POPULAR POSTS</h4>
                            {
                        news.slice(7,9).map(data => {
                            return  <Fragment key={data._id}>
                            <div className="d-flex justify-content-between my-5">
                            <img src={data.image} alt="not found" className="mb-1 w-25" />
                            <div className="ml-5">
                            <Link to={`/newsDetails/${data._id}`}> <h6>{data.title}</h6></Link>
                              <div className="d-flex justify-content-between">
                                  <small className="country">{data.country}</small>
                                  <small>{ new Date(data.createdAt).toDateString()}</small>
                              </div>
                            </div>
                        </div>
                        </Fragment>
                        })
                    }
                    </Col>


                    <Col md="4">
                        <h4 className="text-center">
                            POPULAR CATEGORY</h4>

                        <div className="d-flex justify-content-between mt-3">       
                        <ul>
                            <li>Elections</li>
                            <li>Health</li>
                            <li>Sports</li>
                            <li>Religion</li>
                            <li>World</li>
                        </ul>

                            <ul className="mr-5">
                                <li>7</li>
                                <li>8</li>
                                <li>6</li>
                                <li>5</li>
                                <li>7</li>
                            </ul></div>


                    </Col>

                </Row>

                <Row className="mt-5 text-white">
                    <Col md="4">
                        <h1>WORLD NEWS</h1>
                        <p>POLITICS AROUND THE GLOBAL</p>
                    </Col>
                    <Col md="6">
                        <h5>ABOUT US</h5>
                        <p>Newspaper is your news, entertainment, music fashion website. We provide you with the latest breaking news and videos straight from the entertainment industry.</p>
                        <p>Contact us: contact@yoursite.com</p>
                    </Col>
                    <Col md="2">
                        <h5>FOLLOW US</h5>
                        <div className="d-flex justify-content-center mt-5">
                            <FontAwesomeIcon icon={faFacebookF} />
                            <FontAwesomeIcon icon={faTwitter} className="mx-2" />
                            <FontAwesomeIcon icon={faLinkedin} />
                            <FontAwesomeIcon icon={faYoutube} className="mx-2" />
                        </div>
                    </Col>
                </Row>
            </Container>
            <p className="text-center text-white mt-2">© 2021 World News . All rights reserved</p>
        </div>
    );
};

export default Footer;