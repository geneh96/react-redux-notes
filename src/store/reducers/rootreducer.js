import authReducer from './authreducer'
import noteReducer from './notereducer'
import {combineReducers} from 'redux'
import { firestoreReducer } from 'redux-firestore'

const rootReducer = combineReducers({
    auth: authReducer,
    note: noteReducer,
    firestore: firestoreReducer

})

export default rootReducer