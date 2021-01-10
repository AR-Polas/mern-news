import React, { useState } from 'react';
import { useEffect } from 'react';

const NewsPagination = (props) => {
    const { itemsPerPage, onPaginationChange, totalItems } = props;

    const [counter, setCounter] = useState(1)
    useEffect(() => {
        const value = itemsPerPage * counter;
        onPaginationChange(value - itemsPerPage, value)
    }, [counter])

    const numberOfBtn = Math.ceil(totalItems / itemsPerPage)
    return (
        <div className="d-flex justify-content-center">
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    {
                        new Array(numberOfBtn).fill().map((element, index) => (

                            <li className={`page-item ${index + 1 === counter ? "active" : null}`}>
                                <button onClick={() => setCounter(index + 1)} className="page-link">{index + 1}</button></li>
                        ))
                    }
                </ul>
            </nav>
        </div>
    );
};

export default NewsPagination;