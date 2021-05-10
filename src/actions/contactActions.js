import {
  CONTACT_CREATE,
  GET_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  SELECT_CONTACT,
  CLEAR_CONTACT,
  DELETE_ALL,
} from '../constants/contactConstans'

export const addContact = (contact) => async (dispatch) => {
  try {
    dispatch({
      type: CONTACT_CREATE,
      payload: contact,
    })
  } catch (error) {
    console.log(error)
  }
}

export const getContact = (id) => async (dispatch) => {
  try {
    dispatch({
      type: GET_CONTACT,
      payload: id,
    })
  } catch (error) {
    console.log(error)
  }
}

export const updateContact = (contact) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_CONTACT,
      payload: contact,
    })
  } catch (error) {
    console.log(error)
  }
}

export const deleteContact = (id) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_CONTACT,
      payload: id,
    })
  } catch (error) {
    console.log(error)
  }
}



export const selectAllContact = (id) => async (dispatch) => {
  try {
    dispatch({
      type: SELECT_CONTACT,
      payload: id,
    })
  } catch (error) {
    console.log(error)
  }
}


export const clearAllContact = () => async (dispatch) => {
  try {
    dispatch({
      type: CLEAR_CONTACT,
      payload: [],
    })
  } catch (error) {
    console.log(error)
  }
}



export const deleteAllContact = () => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_ALL,
      payload: [],
    })
  } catch (error) {
    console.log(error)
  }
}
