import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Home/Header/Header';
import { useSelector } from 'react-redux'
import { Col, Container, Row } from 'react-bootstrap';

const NewsDetails = () => {
    const { id } = useParams()

    const news = useSelector((state) => state.reducer)

    const matchNews = news.filter(pd => pd._id === id)
    const matchCategory = news.filter(nw => nw.category === matchNews[0].category)

    useEffect(() => {
        window.scrollTo(0, 0)
    });
    
    return (
        <div>
            <Header />
            {
                matchNews.map(data => {
                    return <React.Fragment key={data._id}>
                        <Container className="my-5">
                            <Row>
                                <Col md="6">
                                    <img src={data.image} alt="not found" className="news-details-img" />
                                </Col>
                                <Col md="6 mt-2">
                                    <h1>{data.title}</h1>
                                    <div className="d-flex justify-content-start">
                                        <small className="mr-5">{data.country}</small>
                                        <p>{new Date(data.createdAt).toDateString()}</p>
                                    </div>
                                    <p>{data.description}</p>
                                    <br />
                                    <p>{data.content}</p>
                                </Col>
                            </Row>
                        </Container>
                    </React.Fragment>
                })
            }
            <Container>
                <div className="mb-5 unique-tag-line">
                    <span> Related NEWS</span>
                </div>
                <Row>
                    {
                        matchCategory.map(data => {
                            return <React.Fragment key={data._id}>
                                <Col md="4 mb-5 news-card">
                                    <h4 className="text-uppercase">{data.title}</h4>
                                    <div className="d-flex justify-content-between">
                                        <h6>{data.journalist}</h6>
                                        <p>{new Date(data.createdAt).toDateString()}</p>
                                    </div>
                                    <img src={data.image} alt="not found" className="news-img" />
                                    <Link to={`/newsDetails/${data._id}`}>  <p className="mt-2">{data.description}</p></Link>
                                </Col>
                            </React.Fragment>
                        })
                    }
                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default NewsDetails;