import React from 'react';
import Header from '../Home/Header/Header';
import { Button, Form } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { createNews, updateNews } from '../../action/newsAction/newsAction';
import { useHistory } from "react-router-dom";



const CreateNews = ({ callbacks, id, setId }) => {

    const [callback, setCallback] = callbacks;

    let history = useHistory();
    const dispatch = useDispatch()
    const [news, setNews] = useState({
        journalist: '',
        title: '',
        description: '',
        country: '',
        category: '',
        image: ''

    })

    const findNews = useSelector((state) => state.reducer.find((dt) => dt._id === id))

    useEffect(() => {
        if (findNews) setNews(findNews)
    }, [findNews])

    const handleSubmit = (e) => {
        e.preventDefault()

        if (id === 0) {
            dispatch(createNews(news))
        }
        else {
            dispatch(updateNews(id, news))
        }
        setCallback(!callback)
        setId(0)
        history.push("/admin/allNews");
    }
    return (
        <div>
            <Header />
            <div className="mx-auto w-50 my-5 shadow p-3">
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Control type="text" name="journalist" onChange={e => setNews({ ...news, journalist: e.target.value })} value={news.journalist} placeholder="journalist" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Control type="text" name="title" onChange={e => setNews({ ...news, title: e.target.value })} value={news.title} placeholder="title" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Control type="text" name="description" onChange={e => setNews({ ...news, description: e.target.value })} value={news.description} placeholder="description" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Control onChange={e => setNews({ ...news, country: e.target.value })} value={news.country} as="select" defaultValue="country">
                            <option value="bangladesh">Country</option>
                            <option value="bangladesh">Bangladesh</option>
                            <option value="england">England</option>
                            <option value="iran">Iran</option>
                            <option value="use">Usa</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Control onChange={e => setNews({ ...news, category: e.target.value })} value={news.category} as="select" defaultValue="category">
                            <option value="world">Category</option>
                            <option value="election">election</option>
                            <option value="health">health</option>
                            <option value="economy">economy</option>
                            <option value="religion">religion</option>
                            <option value="forest">forest</option>
                            <option value="world">world</option>
                            <option value="sports">sports</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <FileBase type="file" multiple={false} onDone={({ base64 }) => setNews({ ...news, image: base64 })} value={news.image} />
                    </Form.Group>


                    <Button variant="primary" className="mx-auto" type="submit">
                        Submit
                    </Button>

                </Form>
            </div>
        </div>
    );
};

export default CreateNews;