import React, { Fragment } from 'react';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { SemipolarLoading  } from 'react-loadingg';

const RelatedNews = () => {

    const news = useSelector((state) => state.reducer)

    return (
        <div className="mt-5 popular-news ">
            <div className="unique-tag-line">
                <span> RELATED NEWS</span>
            </div>

            <div className="mt-5">
                {
                   news.length === 0 ? <div style={{marginTop : '200px'}}><SemipolarLoading /></div> : news.slice(0, 5).map(data => {
                        return <Fragment key={data._id}>
                            
                            <Link to={`/newsDetails/${data._id}`}>     <h5 className="text-secondary text-uppercase">{data.title}</h5></Link>
                            <div className="d-flex justify-content-between">
                                <small>{data.country}</small>
                                <p>{data.journalist}</p>
                                <p>{new Date(data.createdAt).toDateString()}</p>
                            </div>

                            <hr />
                        </Fragment>
                    })
                }
            </div>
        </div>
    );
};

export default RelatedNews;