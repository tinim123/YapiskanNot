import {useState, useContext} from 'react';
import MainContext from '../MainContext';

function LeaveCommentText(){
    const {position}=useContext(MainContext)
    //mouse takip
    return(
        <div className="leave-comment-text" style={{position:'fixed', top: position.y, left: position.x+20}}> Yorum yazmak için tıkla</div>
    )

}

export default LeaveCommentText