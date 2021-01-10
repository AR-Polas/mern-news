import React from 'react';
import Header from '../Home/Header/Header';
import { useSelector } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux'
import { deleteNews } from '../../action/newsAction/newsAction';
import { Link } from 'react-router-dom';
import { SemipolarLoading } from 'react-loadingg';

const AllNews = ({ setId }) => {

    const dispatch = useDispatch()
    const allNews = useSelector((state) => state.reducer)
    return (
        <>
            <Header />

            <Container className="my-5">
                <Row>
                    {
                        allNews.length === 0 ? <SemipolarLoading /> : allNews.map(data => {
                            return <React.Fragment key={data._id}>
                                <Col md="4 " style={{ height: '500px' }}>
                                    <h4 className="text-uppercase">{data.title}</h4>
                                    <div className="d-flex justify-content-between">
                                        <h6>{data.journalist}</h6>
                                        <p>{new Date(data.createdAt).toDateString()}</p>
                                    </div>
                                    <img src={data.image || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt="not found" style={{ width: '100%', height: '30%' }} />
                                    <p className="mt-2">{data.description}</p>
                                    <div className="d-flex justify-content-between">

                                        <Link to="/admin/create">  <button onClick={() => setId(data._id)} className="btn btn-primary">Edit</button></Link>

                                        <button className="btn btn-danger" onClick={() => dispatch(deleteNews(data._id))}>Delete</button>

                                    </div>
                                </Col>
                            </React.Fragment>
                        })
                    }
                </Row>
            </Container>
        </>
    );
};

export default AllNews;