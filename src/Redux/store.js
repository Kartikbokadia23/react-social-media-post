import { createStore, combineReducers } from 'redux';
import { Posts } from './Reducers/post'
import { Users } from './Reducers/user'
import { Comments } from './Reducers/comments'

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