import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Fragment } from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import { faFacebookF, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import RelatedNews from './RelatedNews';
import ReactPlayer from 'react-player'
import { useSelector } from 'react-redux'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SemipolarLoading } from 'react-loadingg';

const PopularNews = () => {

    const [searchNews, setSearchNews] = useState('world')

    const news = useSelector((state) => state.reducer)
    const filterNews = news.filter(pd => pd.category === searchNews)
    return (
        <div className="my-5">

            <Container className="mb-5">
                <div className="text-center">
                    <h3>Tranding News</h3>
                    <Carousel autoPlay={true}
                        interval={5000}
                        controls={false}
                        indicators={false}>
                        <Carousel.Item>
                            <h5>US Travel Explains How Industry Can Take</h5>
                        </Carousel.Item>
                        <Carousel.Item>
                            <h5>ASTA Provides Unprecedented Assistance</h5>
                        </Carousel.Item>
                        <Carousel.Item>
                            <h5>Florida Considering Bill to Reverse Key West</h5>
                        </Carousel.Item>
                    </Carousel>
                </div>


                <div className="pt-5">

                    <Row>
                        <Col md="8">
                            <div className="unique-tag-line">
                                <span> POPULAR NEWS</span>

                                <div className="d-flex news-category float-right">
                                    <p onClick={() => setSearchNews('world')}>All</p>
                                    <p onClick={() => setSearchNews('election')}>Elections</p>
                                    <p onClick={() => setSearchNews('sports')}>Sports</p>
                                    <p onClick={() => setSearchNews('health')}>Healthcare</p>
                                </div>
                            </div>

                            {
                                filterNews.length === 0 ? <SemipolarLoading /> : filterNews.map(data => {
                                    return <Fragment key={data._id}>
                                        <div className="my-5 popular-news">
                                        <Row>
                                            <Col md="6">
                                                <img src={data.image} alt="not found" />
                                            </Col>

                                            <Col md="6">
                                                <div>
                                                    <h4>{data.title}</h4>
                                                    <div className="d-flex justify-content-between">
                                                        <small>{data.country}</small>
                                                        <p>{data.journalist}</p>
                                                        <p>{new Date(data.createdAt).toDateString()}</p>
                                                    </div>

                                                    <p>{data.description}</p>

                                                    <Link to={`/newsDetails/${data._id}`}> <button className="btn btn-brand">Read More</button></Link>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    </Fragment>
                                })
                            }
                        </Col>
                        <Col md="4" className=" border-left border-primary popular">
                            <div className="unique-tag-line">
                                <span> FOLLOW US</span>
                            </div>


                            <div className=" follow-us-fb">
                                <p><FontAwesomeIcon className="text-white mr-4" icon={faFacebookF} />
                            21,002 Fans</p>
                                <p>LIKE</p>
                            </div>

                            <div className=" follow-us-tw">
                                <p><FontAwesomeIcon className="text-white mr-4" icon={faTwitter} />
                            21,002 Fans</p>
                                <p>SHARE</p>
                            </div>

                            <div className="follow-us-yt">
                                <p><FontAwesomeIcon className="text-white mr-4" icon={faYoutube} />
                            21,002 Fans</p>
                                <p>SUBSCRIBE</p>
                            </div>

                            <RelatedNews />
                        </Col>
                    </Row>

                </div>

                <div className="my-5">
                <ReactPlayer
                    url="https://youtu.be/TrP78FhNAf8"
                    controls
                    playbackRate={2}
                    width="100%"
                    height="504px"
                />
            </div>
            </Container>
        </div>
    );
};

export default PopularNews;