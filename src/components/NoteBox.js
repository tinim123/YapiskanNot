import {useContext, useState} from 'react';
import MainContext from '../MainContext';


function NoteBox(){
    //select box kullanarak bunları bir not seçeneği olarak göstereceğiz
    const types = [{
        name:"comment",
        color:"black",
        text:"Not"
    },
    {
        name:"private-comment",
        color:"purple",
        text: "Gizli Not"
    },
    {
        name:"note",
        color: "orange",
        text:"Yorum"
    },
    {
        name:"extra",
        color:"red",
        text:"Extra Bilgi"
    }
]
    //maincontext ile globalden değişkenlerimizi alıyoruz
    const {boxPosition, setMode, notes, setNotes, setBoxVisible}=useContext(MainContext)
    const [color, setColor] = useState(types[0].color)
    const [note, setNote] = useState('')
  
    
  const changeColor = (e)=>{
        setColor(e.target.value)
  }

  const noteValue = (e)=>{
    setNote(e.target.value)
  }

  //not ekleme ve değerini 1 arttırma
  const addNote = ()=>{
    const currentNote = {
        note,
        number:notes.length+1,
        color,
        position:{
          x:boxPosition.x,
          y:boxPosition.y
        }
    }
    setNotes([...notes, currentNote]) 
    setBoxVisible(false)
    
    setMode(true)
  }


    return( 
        <div onMouseEnter={()=>{setMode(false)}} onMouseLeave={()=>{setMode(true)}} className="note-box" 
         style={{'--color':color, position:'absolute', top:boxPosition.y, left: boxPosition.x}}>
            <span className="note-box-number">
                {notes.length + 1 }
            </span>
            <select onChange={changeColor} className="select-box">
                {types.map(type=>(
                    <option value={type.color}>{type.text}</option>
                )
                )}
            </select>
            <textarea onChange={noteValue} cols="30" rows="5"/>
            <button onClick={addNote} disabled={!note}>Ekle</button>
        </div>
        
    )
}

export default NoteBox