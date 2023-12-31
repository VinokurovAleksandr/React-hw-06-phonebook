// import { combineReducers } from 'redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import contactsReduser from './contacts-actions/contacts-reducer';
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist';
import persistStore from 'redux-persist/es/persistStore';
// import storage from 'redux-persist/lib/storage';

import { persistedContactReducer } from '../redux/contactsSlise';
import { filterReducer } from '../redux/filterSlise';


// const contactsPersistConfig = {
//     key: 'contacts',
//     storage,
//     blacklist: ['filter'],
// };

const middleware = getDefaultMiddleware({
    serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    }
});


// const rootReducer = combineReducers({
//     contacts: contactsReduser,
// });
// const store = createStore(rootReducer, composeWithDevTools());

// const persistedReducer = persistReducer(contactsPersistConfig, rootReducer)

export const store = configureStore({
    reducer: {
        contacts: persistedContactReducer,
        filter: filterReducer,
    },
    middleware,
  
});

export const persistor = persistStore(store);

// eslint-disable-next-line import/no-anonymous-default-export
