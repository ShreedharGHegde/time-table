import axios from 'axios';
import {GET_TEACHERS, DELETE_TEACHER, ADD_TEACHER, TEACHERS_LOADING } from '../types';
import { connection } from 'mongoose';


export const getTeachers = () => dispatch => {
  dispatch(setTeachersLoading());
  axios
    .get('http://localhost:5000/api/teacher')
    .then(res =>{
      console.log('teacher res', res.data)
      dispatch({
        type: GET_TEACHERS,
        payload: res.data
      })
    }
    )
    .catch(err =>
        console.log('teacher err', err)
    );
};

export const addTeacher = teacher => (dispatch, getState) => {
  console.log('teacher', teacher)
  axios
    .post('http://localhost:5000/api/teacher', teacher)
    .then(res =>{
      console.log('post res', res.data)
      dispatch({
        type: ADD_TEACHER,
        payload: res.data
      })
    }
    )
    .catch(err =>
     console.log('teacher err', err)
    );
};

export const deleteTeacher = id => (dispatch, getState) => {
  axios
    .delete(`/api/teacher/${id}`)
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