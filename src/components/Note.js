import {useContext, useState} from 'react';
import Draggable from 'react-draggable'; 
import MainContext from '../MainContext';


function Note(note){

    const [visible, setVisible] = useState(false)
    const [clickable, setClickable] = useState(true)
    const {setMode} = useContext(MainContext)
    const showVisible = ()=>{
        if(clickable){
            setVisible(!visible)
        }
    }

    const onDrag =()=>{
        setClickable(false)
    }

    const onStart = ()=>{
        setClickable(true)
    }

    return( 
        <Draggable onStart={onStart} onDrag={onDrag} defaultPosition={{x:note.position.x,y:note.position.y}}>
            <div onMouseEnter={()=>{setMode(false)}} onMouseLeave={()=>{setMode(true)}} className="note-container" style={{ '--color':note.color, position: 'absolute', top: 0, left:0}}>
           <span onClick={showVisible} className="note-box-number"> {note.number } </span>
            <div style={{display:visible?'flex': 'none'}} className="note">
                {note.note}
            </div>
        </div>
        </Draggable>
        
    )
}

export default Note