import {useState, useContext} from 'react';
import MainContext from '../MainContext';

function LeaveCommentText(){
    const {position}=useContext(MainContext)
    return(
        <div className="leave-comment-text" style={{position:'fixed', top: position.y, left: position.x+20}}> C tuşu ile yorum moduna geçin</div>
    )

}

export default LeaveCommentText