import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Home/Header/Header';
import { useSelector } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { SemipolarLoading } from 'react-loadingg';

const WorldNews = () => {
    const news = useSelector((state) => state.reducer)
    const worldNews = news.filter(pd => pd.category === "world")
    return (
        <div>
            <Header />
            <Container className="py-5 mb-5">
                <Row>
                    {
                        worldNews.length === 0 ? <SemipolarLoading /> : worldNews.map(data => {
                            return <React.Fragment key={data._id}>
                                <Col md="4" >
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

export default WorldNews;