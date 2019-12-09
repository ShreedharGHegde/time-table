import axios from 'axios';
import {GET_TEACHERS, DELETE_TEACHER, ADD_TEACHER, TEACHERS_LOADING } from '../types';


export const getTeachers = () => dispatch => {
  dispatch(setTeachersLoading());
  axios
    .get('http://localhost:5000/teachers')
    .then(res =>
      dispatch({
        type: GET_TEACHERS,
        payload: res.data
      })
    )
    .catch(err =>
        console.log('teacher err', err)
    );
};

export const addTeacher = teacher => (dispatch, getState) => {
  axios
    .post('http://localhost:5000/teacher', teacher)
    .then(res =>
      dispatch({
        type: ADD_TEACHER,
        payload: res.data
      })
    )
    .catch(err =>
     console.log('teacher err', err)
    );
};

export const deleteTeacher = id => (dispatch, getState) => {
  axios
    .delete(`/api/items/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_TEACHER,
        payload: id
      })
    )
    .catch(err =>
      console.log('teachers err', err)
    );
};

export const setTeachersLoading = () => {
  return {
    type: TEACHERS_LOADING
  };
};