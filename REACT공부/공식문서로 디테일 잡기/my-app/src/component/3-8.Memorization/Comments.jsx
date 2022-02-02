import React , {useCallback} from 'react'
import CommentItem from './CommentItem'

export default function Comments(props) {

    const handleClick= useCallback(() =>{
        console.log('´­¸²');
    });

    return (
        <div>
            {props.commentList.map(comment => 
            <CommentItem
                key={comment.title}
                title = { comment.title }
                content = { comment.content }
                likes = { comment.likes }
                onClick = {handleClick}
                />)}
        </div>
    )
}
