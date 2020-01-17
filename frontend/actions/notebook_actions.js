export const RECEIVE_NOTEBOOK = "RECEIVE_NOTEBOOK"
export const RECEIVE_NOTEBOOKS = "RECEIVE_NOTEBOOKS"
import * as APIUtil from '../util/notebook_api_util'
 
const receiveNotebook = notebook => ({
    type: RECEIVE_NOTEBOOK,
    data: {notebook}
})

const receiveNotebooks = notebooks => ({
    type: RECEIVE_NOTEBOOKS,
    data: {notebooks}
})

export const fetchNotebooks = dispatch => (
    APIUtil.fetchNotebooks().then(notebooks =>(
        dispatch(receiveNotebooks(notebooks))
    ))
)

 export const fetchNotebook = dispatch => (
    APIUtil.fetchNotebook().then(notebook => (
        dispatch(receiveNotebook(notebook))
    ))
)

export const createNotebook = notebook => (
    APIUtil.createNotebook(notebook).then(notebook => (
        dispatch(receiveNotebook(notebook))
    ))
)