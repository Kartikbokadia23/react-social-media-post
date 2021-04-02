import React from 'react';
import ReactTimeAgo from 'react-time-ago'

export default function Comment(props) {
    console.log(props)
    return (
        <React.Fragment>
            {
                props.comment.comments.map((c)=>{
                    return(
                        <div className = "comment-list-item" key = {c.id}>
                        <img src={props.user.image}></img>
                        <p><strong>{props.user.name}</strong> - {c.comment}<br/><br/><i><ReactTimeAgo date={c.timeAgo} locale="en-US"/> &nbsp; &nbsp; <a href="#" onClick={() => props.deleteComment(c.id)}>Delete</a></i></p>
                        </div>
                    )
                })
            }
            </React.Fragment>
    )
}
