import "./App.css";
import { useRef, useEffect, useState } from "react";
import MainContext from './MainContext';
import LeaveCommentText from './components/LeaveCommentText';
import Note from './components/Note';
import NoteBox from './components/NoteBox';
import NoteBefore from './components/NoteBefore';

function App() {
  const screen = useRef(null);
  const [mode, setMode] = useState(false)
  const [boxVisible, setBoxVisible]=useState(false)
  const [boxPosition, setBoxPosition] = useState({
    x:0,
    y:0
  })

  const [notes, setNotes] = useState([{
    note:"test notu",
    number:1,
    color:"red",
    position:{
      x:350,
      y:300
    }
  }])
  const [position, setPosition ] = useState({
    x:0,
    y:0
  })

  //başlangıçta en dışta bulunan div'e fokuslanmamızı sağlayan komut
  useEffect(() => {
    screen.current.focus()
  }, []);

  //yorum modunu açıp kapamak için c tuşunu atadık ve state içinde güncelledik
  const handleKeyUp = (e) => {
    if (e.key === "c") {
      setMode(!mode)
      setBoxVisible(false)
    }
  };


  //mouse konumunu bulmak için kullanıyoruz
  const handleMouseMove = (e) =>{
     setPosition({
       x:e.pageX,
       y:e.pageY
     })
  }

  //c tuşuna basıldığında mouse takip edecek box açılması için state içinde visible true yapılıyor
  const handleClick = (e) =>{
    if(mode){
    setBoxPosition({
      x: position.x,
      y: position.y
    })
    setBoxVisible(true)
  }}


//Maincontext ile global olacak değerlerimizi giriyoruz
  const data={
    position,
    boxPosition,
    setMode,
    notes,
    setNotes,
    setBoxVisible
  }

  /*<div className="image">
  <img src="https://webso.cool/images/psikologofisi.jpg" />
  </div>*/
  

  return (
    <MainContext.Provider value={data}>
    <div onClick={handleClick} onMouseMove={handleMouseMove} ref={screen} tabIndex={0} onKeyUp={handleKeyUp} 
      className="screen">
        <div className="mainDiv">
          <div className="is1"><p className="yazi">İş 1</p></div>
          <div className="is2"><p className="yazi">İş 2</p></div>
          <div className="is3"><p className="yazi">İş 3</p></div>
        </div>
       {!mode && <NoteBefore/> }
      {mode && <LeaveCommentText/>}
      {notes && notes.map(note =><Note {...note}/>)}
      {boxVisible && <NoteBox/>}
    </div>
    </MainContext.Provider>
  );
}

export default App;
