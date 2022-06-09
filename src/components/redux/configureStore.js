import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import * as Books from './books/books';
import * as Categories from './categories/categories';

const rootReducer = combineReducers(Books, Categories);
const store = configureStore(rootReducer);

export default store;
