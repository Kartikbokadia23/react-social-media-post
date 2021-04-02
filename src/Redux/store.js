import {createStore, combineReducers} from 'redux';
import { Posts } from './post'
import { Users } from './user'
import { Comments } from './comments'

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            posts: Posts,
            users: Users,
            comments: Comments
        })
    );

    return store;
}