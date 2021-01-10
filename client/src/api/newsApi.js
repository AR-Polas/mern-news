import axios from 'axios'

const url = '/news'

export const getData = () => axios.get(url)

export const createData = data => axios.post(url, data)

export const updateData = (id,data) => axios.put(`${url}/${id}`,data)

export const deleteData = (id) => axios.delete(`${url}/${id}`)
