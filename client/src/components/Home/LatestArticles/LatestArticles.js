import React, { Fragment, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import NewsPagination from '../../newsPagination/NewsPagination';


const LatestArticles = () => {
    const [itemsPerPage, setItemsPerPage] = useState(6)
    const [pagination, setPagination] = useState({
        start: 0,
        end: itemsPerPage
    })
    const { start, end } = pagination;

    const onPaginationChange = (start, end) => {
        setPagination({ start, end })
    }
    const news = useSelector((state) => state.reducer)


    return (
        <Container className="py-5">
            <div className="unique-tag-line">
                <span> Latest Articles</span>
            </div>

            <Row className="mt-5">
                {
                    news.slice(start, end).map(data => {
                        return <Fragment key={data._id}>
                            <Col md="4 news-card">
                            <h4 className="text-uppercase">{data.title}</h4>
                            <div className="d-flex justify-content-between">
                                <h6>{data.journalist}</h6>
                                <p>{new Date(data.createdAt).toDateString()}</p>
                            </div>
                            <img src={data.image} alt="not found" className="news-img" />
                            <Link to={`/newsDetails/${data._id}`}>  <p className="mt-2">{data.description}</p></Link>
                        </Col>
                        </Fragment>
                    })
                }
                <NewsPagination itemsPerPage={itemsPerPage} onPaginationChange={onPaginationChange} totalItems={news.length}> </NewsPagination>
            </Row>

        </Container>
    );
};

export default LatestArticles;