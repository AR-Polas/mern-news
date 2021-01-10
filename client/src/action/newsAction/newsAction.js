import * as api from '../../api/newsApi'

export const getNews = () => async (dispatch) => {
    try {
        const {data} = await api.getData();
        dispatch({type : 'FETCH_ALL', payload : data})
    } catch (error) {
        console.log(error.message)
    }
}


export const createNews = (info) => async (dispatch) => {
    try {
        const {data} = await api.createData(info);

        dispatch({type : 'CREATE', payload : data})
    } catch (error) {
        console.log(error.message)
    }
}
export const updateNews = (id,info) => async (dispatch) => {
    try {
        const {data} = await api.updateData(id,info);

        dispatch({type : 'UPDATE', payload : data})
    } catch (error) {
        console.log(error.message)
    }
}

export const deleteNews = (id) => async (dispatch) => {
    try {
         await api.deleteData(id);

        dispatch({type : 'DELETE', payload : id})
    } catch (error) {
        console.log(error.message)
    }
}