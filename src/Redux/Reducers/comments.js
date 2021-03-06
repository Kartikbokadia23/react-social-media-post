import * as ActionTypes from '../ActionTypes'

export const Comments = (state = { comments: [] }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            comment.id = state.comments.length
            return { ...state, comments: state.comments.concat(comment) };

        case ActionTypes.DELETE_COMMENT:
            return { ...state, comments: state.comments.filter(comment => comment.id != action.payload.commentId) }
        default:
            return state;
    }
};