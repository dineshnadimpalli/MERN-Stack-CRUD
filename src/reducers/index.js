'use strict'
import { combineReducers } from 'redux';
import {eventsReducers} from './eventsReducers';

export default combineReducers({
    events: eventsReducers
});