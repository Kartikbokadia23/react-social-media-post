import * as ActionTypes from './ActionTypes'

export const addComment = (comment , postId , userId , timeAgo) => ({
    type: ActionTypes.ADD_COMMENT,
    payload:{
        comment: comment,
        postId: postId,
        userId: userId,
        timeAgo: timeAgo
    }
});


export const deleteComment = (commentId) => ({
    type: ActionTypes.DELETE_COMMENT,
    payload:{
        commentId:commentId
    }
})